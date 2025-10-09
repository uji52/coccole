/* eslint-disable */
var addSorting = (function() {
    'use strict';
    var cols,
        currentSort = {
            index: 0,
            desc: false
        };

    /**
     * Retrieve the coverage summary table element from the document.
     * @return {Element|null} The first element with class `coverage-summary`, or `null` if none is found.
     */
    function getTable() {
        return document.querySelector('.coverage-summary');
    }
    /**
     * Return the first header row (tr) of the coverage summary table.
     * @returns {HTMLTableRowElement|null} The first `tr` element inside the table's `thead`, or `null` if not found.
     */
    function getTableHeader() {
        return getTable().querySelector('thead tr');
    }
    /**
     * Retrieve the tbody element of the coverage summary table.
     *
     * @returns {HTMLTableSectionElement|null} The first tbody inside the coverage summary table, or `null` if the table or tbody is not present.
     */
    function getTableBody() {
        return getTable().querySelector('tbody');
    }
    /**
     * Get the header cell for the nth column.
     * @param {number} n - Zero-based column index.
     * @returns {HTMLTableCellElement|undefined} The corresponding <th> element, or `undefined` if the index is out of range.
     */
    function getNthColumn(n) {
        return getTableHeader().querySelectorAll('th')[n];
    }

    /**
     * Filter rows in the first <tbody> using the value of the input with id "fileSearch".
     *
     * If the input value is a valid regular expression, matches are performed case-insensitively
     * against each row's text content using that RegExp; if the value is not a valid RegExp,
     * a case-insensitive substring search is used instead. Rows that match are shown (display is
     * cleared), and rows that do not match are hidden (display set to "none").
     */
    function onFilterInput() {
        const searchValue = document.getElementById('fileSearch').value;
        const rows = document.getElementsByTagName('tbody')[0].children;

        // Try to create a RegExp from the searchValue. If it fails (invalid regex),
        // it will be treated as a plain text search
        let searchRegex;
        try {
            searchRegex = new RegExp(searchValue, 'i'); // 'i' for case-insensitive
        } catch (error) {
            searchRegex = null;
        }

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            let isMatch = false;

            if (searchRegex) {
                // If a valid regex was created, use it for matching
                isMatch = searchRegex.test(row.textContent);
            } else {
                // Otherwise, fall back to the original plain text search
                isMatch = row.textContent
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
            }

            row.style.display = isMatch ? '' : 'none';
        }
    }

    /**
     * Inserts the file-search UI from the '#filterTemplate' template and hooks its input to the filter handler.
     *
     * Clones the template with id 'filterTemplate', attaches the `onFilterInput` handler to the cloned input with id 'fileSearch', and appends the clone to the template's parent element.
     */
    function addSearchBox() {
        var template = document.getElementById('filterTemplate');
        var templateClone = template.content.cloneNode(true);
        templateClone.getElementById('fileSearch').oninput = onFilterInput;
        template.parentElement.appendChild(templateClone);
    }

    /**
     * Build metadata for each header column and augment sortable headers with a sorter element.
     *
     * @returns {Array<Object>} An array of column metadata objects. Each object contains:
     * - `key` {string} — the column key from the `data-col` attribute.
     * - `sortable` {boolean} — `true` when the column can be sorted (no `data-nosort` attribute).
     * - `type` {string} — the column type from `data-type`, defaulting to `'string'`.
     * - `defaultDescSort` {boolean} — present for sortable columns; `true` when `type` is `'number'`, indicating the default sort direction.
     */
    function loadColumns() {
        var colNodes = getTableHeader().querySelectorAll('th'),
            colNode,
            cols = [],
            col,
            i;

        for (i = 0; i < colNodes.length; i += 1) {
            colNode = colNodes[i];
            col = {
                key: colNode.getAttribute('data-col'),
                sortable: !colNode.getAttribute('data-nosort'),
                type: colNode.getAttribute('data-type') || 'string'
            };
            cols.push(col);
            if (col.sortable) {
                col.defaultDescSort = col.type === 'number';
                colNode.innerHTML =
                    colNode.innerHTML + '<span class="sorter"></span>';
            }
        }
        return cols;
    }
    // attaches a data attribute to every tr element with an object
    /**
     * Extracts a plain object of cell values from a table row, keyed by column name.
     * @param {HTMLTableRowElement} tableRow - The <tr> element whose <td> children contain `data-value` attributes.
     * @return {Object} An object mapping each column's `data-col` key to the corresponding cell value; numeric columns are converted to Numbers.
     */
    function loadRowData(tableRow) {
        var tableCols = tableRow.querySelectorAll('td'),
            colNode,
            col,
            data = {},
            i,
            val;
        for (i = 0; i < tableCols.length; i += 1) {
            colNode = tableCols[i];
            col = cols[i];
            val = colNode.getAttribute('data-value');
            if (col.type === 'number') {
                val = Number(val);
            }
            data[col.key] = val;
        }
        return data;
    }
    /**
     * Populates each tbody row with a `data` object that maps column keys to the row's cell values.
     *
     * The `data` property is attached directly to each tr element in the coverage summary table body.
     */
    function loadData() {
        var rows = getTableBody().querySelectorAll('tr'),
            i;

        for (i = 0; i < rows.length; i += 1) {
            rows[i].data = loadRowData(rows[i]);
        }
    }
    /**
     * Sorts the coverage-summary table rows by the specified column and reorders the DOM.
     *
     * Uses the module's column metadata and the per-row `data` object attached to each <tr> to compare values.
     * @param {number} index - Zero-based index of the column to sort by.
     * @param {boolean} desc - If `true`, sort in descending order; otherwise sort ascending.
     */
    function sortByIndex(index, desc) {
        var key = cols[index].key,
            sorter = function(a, b) {
                a = a.data[key];
                b = b.data[key];
                return a < b ? -1 : a > b ? 1 : 0;
            },
            finalSorter = sorter,
            tableBody = document.querySelector('.coverage-summary tbody'),
            rowNodes = tableBody.querySelectorAll('tr'),
            rows = [],
            i;

        if (desc) {
            finalSorter = function(a, b) {
                return -1 * sorter(a, b);
            };
        }

        for (i = 0; i < rowNodes.length; i += 1) {
            rows.push(rowNodes[i]);
            tableBody.removeChild(rowNodes[i]);
        }

        rows.sort(finalSorter);

        for (i = 0; i < rows.length; i += 1) {
            tableBody.appendChild(rows[i]);
        }
    }
    /**
     * Remove sorting indicator classes from the currently sorted header column.
     *
     * Updates the header cell's class list by removing trailing `sorted` and `sorted-desc` classes.
     */
    function removeSortIndicators() {
        var col = getNthColumn(currentSort.index),
            cls = col.className;

        cls = cls.replace(/ sorted$/, '').replace(/ sorted-desc$/, '');
        col.className = cls;
    }
    /**
     * Mark the currently sorted header column with a sorting indicator class.
     *
     * Appends either `sorted` or `sorted-desc` to the className of the header cell
     * identified by `currentSort.index` depending on `currentSort.desc`.
     */
    function addSortIndicators() {
        getNthColumn(currentSort.index).className += currentSort.desc
            ? ' sorted-desc'
            : ' sorted';
    }
    /**
     * Attach click handlers to each sortable column header to trigger column sorting and update UI state.
     *
     * When a sortable header is clicked, the function determines the new sort direction (toggling if the
     * same column is clicked, otherwise using the column's default), sorts rows by that column, updates
     * the current sort state, and refreshes sort indicators.
     */
    function enableUI() {
        var i,
            el,
            ithSorter = function ithSorter(i) {
                var col = cols[i];

                return function() {
                    var desc = col.defaultDescSort;

                    if (currentSort.index === i) {
                        desc = !currentSort.desc;
                    }
                    sortByIndex(i, desc);
                    removeSortIndicators();
                    currentSort.index = i;
                    currentSort.desc = desc;
                    addSortIndicators();
                };
            };
        for (i = 0; i < cols.length; i += 1) {
            if (cols[i].sortable) {
                // add the click event handler on the th so users
                // dont have to click on those tiny arrows
                el = getNthColumn(i).querySelector('.sorter').parentElement;
                if (el.addEventListener) {
                    el.addEventListener('click', ithSorter(i));
                } else {
                    el.attachEvent('onclick', ithSorter(i));
                }
            }
        }
    }
    // adds sorting functionality to the UI
    return function() {
        if (!getTable()) {
            return;
        }
        cols = loadColumns();
        loadData();
        addSearchBox();
        addSortIndicators();
        enableUI();
    };
})();

window.addEventListener('load', addSorting);