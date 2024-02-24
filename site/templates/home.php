<?= snippet('header') ?>

<main class="main">
  <?php foreach ($page->layout()->toLayouts() as $layout): ?>
    <section class="grid-layout">
      <?php foreach ($layout->columns() as $column): ?>
      <div class="grid-column span-<?= $column->span() ?>" style="--grid-span:<?= $column->span() ?>">
        <?= $column->blocks() ?>
      </div>
      <?php endforeach ?>
    </section>
  <?php endforeach ?>

    <!-- <section id="agenda" class="agenda-content">
      <div id="agenda-wrapper" class="agenda-wrapper">
        <div class="agenda-block">
          <p>06.05.2022, 18:00</p>
          <h2><a href="https://fsrr.org/eventi-fsrr/page/2/">Transtopia. Luogo dell&apos;oltre</a></h2>
          <p>Listening session by Vincenzo Grasso in collaboration with ALMARE, Fondazione Sandretto Re Rebaudengo (IT)
          </p>
        </div>

        <div class="agenda-block">
          <p>FORTHCOMING </p>
          <h2>PORPORA MARCASCIANO</h2>
          <p>Sound installation for Porpora Marcasciano solo show curated by Michele
            Bertolino, Mambo, Bologna (IT)</p>
        </div>

        <div class="agenda-block">
          <p>16-17.11.2022</p>
          <h2>SOUND QUESTS 2022</h2>
          <p>Curated by ALMARE - Live Concert by Antwood + Dj set by La Niña Jacarandá
            and VIBRISSE, Le Roi, Turin (IT);  performances by Eleni Ikoniadou and Vinit Agarwal, Fondazione Sandretto
            Re Rebaudengo, Turin (IT)</p>
        </div>
      </div>
    </section>

    <section id="cover-image" class="cover-image">
      <div id="image" class="image">
        <img src="upload/SQ2022_evento fb.png">
      </div>
      <div id="caption" class="caption">
        <p><em>SOUND QUESTS</em> is a yearly event dedicated to technology and storytelling curated by ALMARE</p>
      </div>
    </section> -->
</main>

<!-- <section class="slide-content">
  <div class="close-btn">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23 1L12 12M12 12L1 23M12 12L1 1M12 12L23 23" />
    </svg>
  </div>
  <div id="slide-content" class="content-wrapper">
    <div class="slide-block">
      <h2>Interviews</h2>
      <div id="interview" class=">
        <div class="cms-repeatable">
          <a href="https://www.labellerevue.org/en/thematic-dossiers/universal-zombie-nation-lbr-11/entretien-almare"
            target="_blank" rel="noopener">Auditory Necromancy </a>
          <p>la belle revue</p>
          <p>[EN/FR]</p>
        </div>
        <div class="cms-repeatable">
          <a href="https://www.domusweb.it/it/arte/gallery/2021/02/26/tra-archeoacustica-e-distopia-un-racconto-sonoro-come-progetto-artistico.html"
            target="_blank" rel="noopener">Archaeoacoustics meets dystopia: a sound story as a work of art</a>
          <p>domus magazine</p>
          <p>[IT/EN]</p>
        </div>
        <div class="cms-repeatable">
          <a href="https://www.youtube.com/watch?v=ybdhXAqMagI&amp;frags=pl%2Cwn" target="_blank"
            rel="noopener">Q-rated</a>
          <p>[IT]</p>
        </div>
        <div class="cms-repeatable">
          <a href="https://formeuniche.org/intervista-collettivo-almare/" target="_blank"
            rel="noopener">FormeUniche</a>
          <p>[IT]</p>
        </div>
        <div class="cms-repeatable">
          <a href="http://atpdiary.com/intervista-con-almare/" target="_blank" rel="noopener">ATP Diary</a>
          <p>[IT]</p>
        </div>
      </div>
    </div>

    <div class="slide-block">
      <h2 class="cms-lock">Texts</h2>
      <div id="texts" class=">
        <div class="cms-repeatable"><a href="upload/SOUND%20QUESTS%20IT%20EN.pdf" target="_blank" rel="noopener">SOUND
            QUESTS, Worlding/Otherworlding</a>
          <p>PDF [IT/EN]</p>
        </div>
        <div class="cms-repeatable"><a
            href="https://www.wavesbetweenus.com/wp-content/uploads/2020/11/All-Signs-Point-to-Rome-Diane-%E2%80%94-ENG.pdf"
            target="_blank" rel="noopener">All Signs Point to Rome, Diane</a>
          <p>Fondazione sandretto re rebaudengo</p>
          <p>PDF [EN]</p>
        </div>
        <div class="cms-repeatable"><a href="https://not.neroeditions.com/all-signs-point-to-rome-diane/"
            target="_blank" rel="noopener">All Signs Point to Rome, Diane</a>
          <p>Not.neroeditions.com</p>
          <p>[IT]</p>
        </div>
        <div class="cms-repeatable"><a href="https://www.neroeditions.com/a-brief-history-of-invisibility/"
            target="_blank" rel="noopener">A Brief History of Invisibility</a>
          <p>NERO</p>
          <p>[EN]</p>
        </div>
        <div class="cms-repeatable"><a
            href="https://static1.squarespace.com/static/5718ef4d2b8ddedcfcfd96ac/t/5dfcfd9ea34172604ace0c69/1576861092595/GetRidofYourself-SummerShow-2019-FondazioneBaruchello.pdf"
            target="_blank" rel="noopener"><span style="font-size: 19.2px;">Get Rid Of Yourself, Ancora Ancora
              Ancora</span></a><br>
          <p>PDF [IT/EN]</p>
        </div>
        <div class="cms-repeatable"><a
            href="https://www.domusweb.it/en/news/2021/03/15/clubhouse-podcasts-and-the-irresistible-rise-of-the-new-digital-orality.html"
            target="_blank" rel="noopener"><span style="font-size: 19.2px;">Clubhouse, podcasts and the irresistible
              rise of the new digital orality</span></a><br>
          <p>DOMUS MAGAZINE</p>
          <p>[IT/en]</p>
        </div>
      </div>
    </div>

    <div class="slide-block">
      <h2 class="cms-lock">Press</h2>
      <div id="press" class=">
        <div class="cms-repeatable"><a href="http://atpdiary.com/get-rid-of-yourself-fondazione-baruchello/"
            target="_blank" rel="noopener">ATP Diary </a>
          <p>[IT]</p>
        </div>
        <div class="cms-repeatable"><a href="http://atpdiary.com/teatrum-botanicum-2018/" target="_blank"
            rel="noopener">ATP Diary, Teatrum Botanicum </a>
          <p>[IT]</p>
        </div>
      </div>
    </div>
  </div>
</section> -->

<?= snippet('footer') ?>