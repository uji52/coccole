<template>
  <div id="fh5co-container">
    <div class="js-sticky">
      <div class="fh5co-main-nav">
        <div class="container-fluid">
          <div class="fh5co-menu-1">
            <a href="#" data-nav-section="home">Home</a>
            <a href="#" data-nav-section="about">About</a>
            <a href="#" data-nav-section="calendar">Calendar</a>
          </div>
          <div class="fh5co-logo">
            <a href="index.html">
              <img
                src="@/assets/images/logo/Coccole_logo-04.png"
                class="img-responsive"
                alt="Coccole"
                style="height: 30px"
              />
            </a>
          </div>
          <div class="fh5co-menu-2">
            <a href="#" data-nav-section="features">Features</a>
            <a href="#" data-nav-section="menu">Menu</a>
            <a href="#" data-nav-section="access">Access</a>
          </div>
        </div>
      </div>
    </div>

    <div id="fh5co-about" data-section="about">
      <div class="fh5co-1col fh5co-text">
        <h2 class="heading to-animate">About Coccole</h2>
        <p class="to-animate">
          <span class="firstcharacter">ち</span
          >いさなパンやさん『Coccole（こっこれ）』と申します。イタリア語で寄り添うなどの意味があります。地域の皆様に寄り添うパン屋になりますようにとの想いを込めました。
          すべてのパン・お菓子を国産小麦で作っています。旬の野菜や果物を取り入れたパンで体にも心にも美味しいパンをお届けできるよう奮闘してまいります。
          どうぞよろしくお願い申し上げます。
        </p>
      </div>
    </div>

    <div id="fh5co-contact" data-section="calendar">
      <div class="container">
        <div class="row text-center fh5co-heading row-padded">
          <div class="col-md-8 col-md-offset-2">
            <h2 class="heading to-animate">Calendar</h2>
            <p class="sub-heading to-animate">
              営業スケジュールは下記の予定です。
            </p>
          </div>
          <div class="col-md-6">
            <figure>
              <img
                src="@/assets/images/schedule/202512.jpg"
                class="img-responsive"
                loading="lazy"
                alt="営業カレンダー(10月)"
              />
            </figure>
          </div>
          <div class="col-md-6">
            <figure>
              <img
                src="@/assets/images/schedule/202601.jpg"
                class="img-responsive"
                loading="lazy"
                alt="営業カレンダー(1月)"
              />
            </figure>
          </div>
        </div>
        <div class="row" style="align-content: center" />
      </div>
    </div>

    <div id="fh5co-featured" data-section="features">
      <div class="container">
        <div class="row text-center fh5co-heading row-padded">
          <div class="col-md-8 col-md-offset-2">
            <h2 class="heading to-animate">人気のパン</h2>
            <p class="sub-heading to-animate">
              日によって製造しているパンが異なる場合もございますのでご了承ください。<br />また、金額は開店時の金額を掲載しております。
            </p>
          </div>
        </div>
        <div class="row">
          <div class="fh5co-grid">
            <div class="fh5co-v-half to-animate-2">
              <div
                class="slide-image fh5co-v-col-2 fh5co-bg-img"
                :style="{ backgroundImage: `url(${images.pan1})` }"
                @error="(error) => handleImageError('タルタルチキン', error)"
              />
              <div class="fh5co-v-col-2 fh5co-text fh5co-special-1 arrow-left">
                <h2>タルタルチキン</h2>
                <span class="pricing">￥340</span>
                <p>
                  具だくさんなタルタルと塩麹に漬け込んだ照り焼きチキンをふわもち生地で挟み焼きました。
                </p>
              </div>
            </div>
            <div class="fh5co-v-half">
              <div class="fh5co-h-row-2 to-animate-2">
                <div
                  class="slide-image fh5co-v-col-2 fh5co-bg-img"
                  :style="{ backgroundImage: `url(${images.pan2})` }"
                  @error="(error) => handleImageError('食パン', error)"
                />
                <div class="fh5co-v-col-2 fh5co-text arrow-left">
                  <h2>Coccole食パン(一斤)</h2>
                  <span class="pricing">￥460</span>
                  <p>
                    耳までしっとりもちもちです。（ハーフでも販売しています）
                  </p>
                </div>
              </div>
              <div class="fh5co-h-row-2 fh5co-reversed to-animate-2">
                <div
                  class="slide-image fh5co-v-col-2 fh5co-bg-img"
                  :style="{ backgroundImage: `url(${images.pan3})` }"
                  @error="
                    (error) => handleImageError('バーニャカウダピザ', error)
                  "
                />
                <div class="fh5co-v-col-2 fh5co-text arrow-right">
                  <h2>バーニャカウダピザ</h2>
                  <span class="pricing">￥320</span>
                  <p>
                    アンチョビソースにたっぷりのお野菜をのせて焼き上げました。
                  </p>
                </div>
              </div>
            </div>

            <div class="fh5co-v-half">
              <div class="fh5co-h-row-2 fh5co-reversed to-animate-2">
                <div
                  class="slide-image fh5co-v-col-2 fh5co-bg-img"
                  :style="{ backgroundImage: `url(${images.pan4})` }"
                  @error="(error) => handleImageError('塩あんパン', error)"
                />
                <div class="fh5co-v-col-2 fh5co-text arrow-right">
                  <h2>塩あんパン</h2>
                  <span class="pricing">￥170</span>
                  <p>塩パンに小倉あんを巻き込みました。</p>
                </div>
              </div>
              <div class="fh5co-h-row-2 to-animate-2">
                <div
                  class="slide-image fh5co-v-col-2 fh5co-bg-img"
                  :style="{ backgroundImage: `url(${images.pan5})` }"
                  @error="(error) => handleImageError('クリームパン', error)"
                />
                <div class="fh5co-v-col-2 fh5co-text arrow-left">
                  <h2>クリームパン</h2>
                  <span class="pricing">￥260</span>
                  <p>クリームのプールのようなクリームパンです。</p>
                </div>
              </div>
            </div>
            <div class="fh5co-v-half to-animate-2">
              <div
                class="slide-image fh5co-v-col-2 fh5co-bg-img"
                :style="{ backgroundImage: `url(${images.pan6})` }"
                @error="
                  (error) =>
                    handleImageError('季節フルーツのデニッシュタルト', error)
                "
              />
              <div class="fh5co-v-col-2 fh5co-text fh5co-special-1 arrow-left">
                <h2>季節フルーツのデニッシュタルト</h2>
                <p>フルーツごとに合わせたクリームと一緒に。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      id="fh5co-type"
      style="background-image: url(./images/pan/004.jpg)"
      data-stellar-background-ratio="0.1"
    >
      <div class="fh5co-overlay" />
      <div class="container">
        <div class="row">
          <div class="col-md-3 to-animate">
            <div class="fh5co-type">
              <h3 class="with-icon icon-1">国産小麦</h3>
              <p>すべてのパン・お菓子に国産小麦を使用しています。</p>
            </div>
          </div>
          <div class="col-md-3 to-animate">
            <div class="fh5co-type">
              <h3 class="with-icon icon-2">イーストフード・不使用</h3>
              <p>手作りパンならではのおいしさと安全をお届けしたいです。</p>
            </div>
          </div>
          <div class="col-md-3 to-animate">
            <div class="fh5co-type">
              <h3 class="with-icon icon-3">
                ショートニング・マーガリン 不使用
              </h3>
              <p>
                バター、オリーブオイル（型離れのために少量のサラダ油）を使用しています。
              </p>
            </div>
          </div>
          <div class="col-md-3 to-animate">
            <div class="fh5co-type">
              <h3 class="with-icon icon-4">旬の野菜・果物</h3>
              <p>
                旬のものには、おいしさと栄養がたっぷり。心にも体にも美味しいパンです。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="fh5co-menus" data-section="menu">
      <div class="container">
        <div class="row text-center fh5co-heading row-padded">
          <div class="col-md-8 col-md-offset-2">
            <h2 class="heading to-animate">Menu</h2>
            <p class="sub-heading to-animate">
              パンのメニューです。<br />（季節や曜日、時間帯によっておいているものが異なります。）
            </p>
          </div>
        </div>
        <div class="row row-padded">
          <div class="col-md-6">
            <div class="fh5co-food-menu to-animate-2">
              <h2>惣菜パン</h2>
              <ul>
                <li>
                  <div class="fh5co-food-desc">
                    <figure>
                      <img
                        src="@/assets/images/pan/036.jpg"
                        class="img-responsive"
                        loading="lazy"
                        alt="海老マヨフォカッチャ"
                      />
                    </figure>
                    <div>
                      <h3>海老マヨフォカッチャ</h3>
                      <p>
                        プリップリのえびちゃんです！<br />季節のお野菜とオーロラソースと一緒に焼き上げてます。
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="fh5co-food-desc">
                    <figure>
                      <img
                        src="@/assets/images/pan/037.jpg"
                        class="img-responsive"
                        loading="lazy"
                        alt="つるしベーコンとトマトのピザ"
                      />
                    </figure>
                    <div>
                      <h3>つるしベーコンとトマトのピザ</h3>
                      <p>
                        ベーコンととまとの王道ピザ！つるしベーコン美味しいですよね！
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="fh5co-food-desc">
                    <figure>
                      <img
                        src="@/assets/images/pan/016.jpg"
                        class="img-responsive"
                        loading="lazy"
                        alt="タルタルチキン"
                      />
                    </figure>
                    <div>
                      <h3>タルタルチキン</h3>
                      <p>
                        ゴロゴロ大きめ具材を入れたタルタルソースと照り焼きちきんをふわもちの生地に挟んで焼き上げました。
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="fh5co-food-desc">
                    <figure>
                      <img
                        src="@/assets/images/pan/038.jpg"
                        class="img-responsive"
                        loading="lazy"
                        alt="いぶりがっこポテトサラダ"
                      />
                    </figure>
                    <div>
                      <h3>いぶりがっこポテトサラダ</h3>
                      <p>
                        秋田名物のいぶりがっこを使用した、国産小麦と和風の味わいがよく合うポテトサラダパンです！アクセントにくるみも乗ってます。
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="fh5co-food-desc">
                    <figure>
                      <img
                        src="@/assets/images/pan/025.jpg"
                        class="img-responsive"
                        loading="lazy"
                        alt="クロックムッシュ"
                      />
                    </figure>
                    <div>
                      <h3>クロックムッシュ</h3>
                      <p>
                        全粒粉カンパーニュを使用した食べごたえのあるソーセージクロックムッシュです！
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="fh5co-food-desc">
                    <figure>
                      <img
                        src="@/assets/images/pan/017.jpg"
                        class="img-responsive"
                        loading="lazy"
                        alt="塩パン"
                      />
                    </figure>
                    <div>
                      <h3>塩パン</h3>
                      <p>ゲランドの塩を使用しています。</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="fh5co-food-menu to-animate-2">
              <h2>菓子パン</h2>
              <ul>
                <li>
                  <div class="fh5co-food-desc">
                    <figure>
                      <img
                        src="@/assets/images/pan/012.jpg"
                        class="img-responsive"
                        loading="lazy"
                        alt="季節フルーツのデニッシュタルト"
                      />
                    </figure>
                    <div>
                      <h3>季節フルーツのデニッシュタルト</h3>
                      <p>フルーツごとに合わせたクリームと一緒に。</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="fh5co-food-desc">
                    <figure>
                      <img
                        src="@/assets/images/pan/018.jpg"
                        class="img-responsive"
                        loading="lazy"
                        alt="ティラミスロール"
                      />
                    </figure>
                    <div>
                      <h3>ティラミスロール</h3>
                      <p>
                        ほろ苦いコーヒーフィリングを巻き込んだパンにたっぷりのマスカルポーネクリームをのせました。
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="fh5co-food-desc">
                    <figure>
                      <img
                        src="@/assets/images/pan/027.jpg"
                        class="img-responsive"
                        loading="lazy"
                        alt="シナモンロール"
                      />
                    </figure>
                    <div>
                      <h3>シナモンロール</h3>
                      <p>
                        アーモンドスライスをたっぷり巻き込み甘さ控えめに仕上げました！ペロリといけちゃいます！
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="fh5co-food-desc">
                    <figure>
                      <img
                        src="@/assets/images/pan/026.jpg"
                        class="img-responsive"
                        loading="lazy"
                        alt="フェアリーパン"
                      />
                    </figure>
                    <div>
                      <h3>フェアリーパン</h3>
                      <p>
                        本日coccoleに現れた妖精さんです。おこちゃまが大好き！中にはチョコクリームが入っています！
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="fh5co-food-desc">
                    <figure>
                      <img
                        src="@/assets/images/pan/010.jpg"
                        class="img-responsive"
                        loading="lazy"
                        alt="クリームパン"
                      />
                    </figure>
                    <div>
                      <h3>クリームパン</h3>
                      <p>クリームのプールのようなクリームパンです。</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="fh5co-food-desc">
                    <figure>
                      <img
                        src="@/assets/images/pan/013.jpg"
                        class="img-responsive"
                        loading="lazy"
                        alt="無花果ブルー"
                      />
                    </figure>
                    <div>
                      <h3>無花果ブルー</h3>
                      <p>
                        ブルーチーズを使用したチーズソースと柔らかく下処理したドライ無花果を挟みました。
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="fh5co-food-menu to-animate-2">
              <h2>サンドウィッチ</h2>
              <ul>
                <li>
                  <div class="fh5co-food-desc">
                    <figure>
                      <img
                        src="@/assets/images/pan/030.jpg"
                        class="img-responsive"
                        loading="lazy"
                        alt="ガーリックたまごサンド、ツナとドライトマトのサンド、ミックスサンド"
                      />
                    </figure>
                    <div>
                      <h3>
                        ガーリックたまごサンド、ツナとドライトマトのサンド、ミックスサンド
                      </h3>
                      <p>
                        ガーリックと黒胡椒のきいたガツンとしたたまごサンドです！手間ひまかけたしっとりツナサンドドライトマトがアクセントです。
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="fh5co-food-desc">
                    <figure>
                      <img
                        src="@/assets/images/pan/032.jpg"
                        class="img-responsive"
                        loading="lazy"
                        alt="大人のラムレーズンサンド"
                      />
                    </figure>
                    <div>
                      <h3>大人のラムレーズンサンド</h3>
                      <p>
                        ラム酒をしっかり効かせたレーズンと北海道産クリームチーズで作ったフィリングをカンパーニュで挟みました！
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="fh5co-food-desc">
                    <figure>
                      <img
                        src="@/assets/images/pan/028.jpg"
                        class="img-responsive"
                        loading="lazy"
                        alt="あんバターサンド"
                      />
                    </figure>
                    <div>
                      <h3>あんバターサンド</h3>
                      <p>
                        塩を効かせたあんことバターをたっぷりカンパーニュで挟みました。
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="fh5co-food-menu to-animate-2">
              <h2>ブレッド</h2>
              <ul>
                <li>
                  <div class="fh5co-food-desc">
                    <figure>
                      <img
                        src="@/assets/images/pan/004.jpg"
                        class="img-responsive"
                        loading="lazy"
                        alt="食パン"
                      />
                    </figure>
                    <div>
                      <h3>食パン</h3>
                      <p>
                        耳までしっとりもちもちです。（ハーフでも販売しています）
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="fh5co-food-desc">
                    <figure>
                      <img
                        src="@/assets/images/pan/031.jpg"
                        class="img-responsive"
                        loading="lazy"
                        alt="全粒粉のカンパーニュ"
                      />
                    </figure>
                    <div>
                      <h3>全粒粉のカンパーニュ</h3>
                      <p>
                        高加水で捏ね上げ、12時間以上の長時間発酵で小麦の旨味を引き出しました！
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="fh5co-food-desc">
                    <figure>
                      <img
                        src="@/assets/images/pan/020.jpg"
                        class="img-responsive"
                        loading="lazy"
                        alt="コーヒーキャラメルカンパーニュ"
                      />
                    </figure>
                    <div>
                      <h3>コーヒーキャラメルカンパーニュ</h3>
                      <p>
                        バターをのせてトーストしていただくと、カリッモチッジュワーの三重奏です！コーヒーの香りとキャラメルの甘さに癒やされてほしい！
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="fh5co-food-desc">
                    <figure>
                      <img
                        src="@/assets/images/pan/022.jpg"
                        class="img-responsive"
                        loading="lazy"
                        alt="無花果とアールグレイのカンパーニュ"
                      />
                    </figure>
                    <div>
                      <h3>無花果とアールグレイのカンパーニュ</h3>
                      <p>
                        たっぷりのアールグレイを使用した生地に柔らかく下処理したドライ無花果と、ホワイトチョコを巻き込んで焼き上げました。
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="fh5co-food-menu to-animate-2">
              <h2>お菓子</h2>
              <ul>
                <!-- 休止 -->
                <!--
                <li>
                  <div class="fh5co-food-desc">
                    <figure>
                      <img
                        src="@/assets/images/pan/029.jpg"
                        class="img-responsive"
                        loading="lazy"
                        alt="クランベリーチョコマフィン"
                      >
                    </figure>
                    <div>
                      <h3>クランベリーチョコマフィン</h3>
                      <p>チョコチップとクランベリーを混ぜ込みました。こめ油を使用しています。</p>
                    </div>
                  </div>
                </li>
                -->
                <li>
                  <div class="fh5co-food-desc">
                    <figure>
                      <img
                        src="@/assets/images/pan/039.jpg"
                        class="img-responsive"
                        loading="lazy"
                        alt="フロランタン"
                      />
                    </figure>
                    <div>
                      <h3>フロランタン</h3>
                      <p>
                        キャラメルコーティングした香ばしいアーモンドをたっぷり乗せたクッキーです！
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="fh5co-food-desc">
                    <figure>
                      <img
                        src="@/assets/images/pan/015.jpg"
                        class="img-responsive"
                        loading="lazy"
                        alt="キャロットケーキ"
                      />
                    </figure>
                    <div>
                      <h3>キャロットケーキ</h3>
                      <p>スパイスの効いた人参ケーキです。</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="fh5co-access" data-section="access">
      <div class="container">
        <div class="row text-center fh5co-heading row-padded">
          <div class="col-md-12">
            <div class="col-md-12">
              <h2 class="heading">Map</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d341.9332040854867!2d139.5385130603167!3d35.379583112473284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185b9a0a6a6711%3A0xf4b2b40afaf804a6!2sCoccole!5e0!3m2!1sja!2sjp!4v1667475566883!5m2!1sja!2sjp"
                width="100%"
                height="400"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
            <div class="col-md-12">
              <h2 class="heading">交通アクセス</h2>
              <p class="sub-heading">
                横浜市栄区長沼町<br />
                <br />
                長沼バス停と長沼町内会館の間の小道を東(マンション方向)に30秒
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pan1 from '@/assets/images/pan/003.jpg'
import pan2 from '@/assets/images/pan/004.jpg'
import pan3 from '@/assets/images/pan/035.jpg'
import pan4 from '@/assets/images/pan/006.jpg'
import pan5 from '@/assets/images/pan/010.jpg'
import pan6 from '@/assets/images/pan/012.jpg'

export default {
  name: 'CoccoleMain',
  props: {
    msg: {
      type: String,
      default: 'Message',
    },
  },
  data() {
    return {
      images: {
        pan1,
        pan2,
        pan3,
        pan4,
        pan5,
        pan6,
      },
    }
  },
  methods: {
    handleImageError(imageName, error) {
      console.error(`画像「${imageName}」の読み込みに失敗しました:`, error)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#app {
  margin-top: 60px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.slide-image {
  background-position: center;
  background-size: cover;
}
</style>
