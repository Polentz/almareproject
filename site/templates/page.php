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
</main>

<section class="slide-content">
  <div class="close-btn">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23 1L12 12M12 12L1 23M12 12L1 1M12 12L23 23" />
    </svg>
  </div>

  <div class="content-wrapper">

    <div class="slide-block">
      <h2>Interviews</h2>
      <div id="interview">

        <div>
          <a href="https://www.labellerevue.org/en/thematic-dossiers/universal-zombie-nation-lbr-11/entretien-almare"
            target="_blank" rel="noopener">Auditory Necromancy </a>
          <p>la belle revue</p>
          <p>[EN/FR]</p>
        </div>

        <div>
          <a href="https://www.domusweb.it/it/arte/gallery/2021/02/26/tra-archeoacustica-e-distopia-un-racconto-sonoro-come-progetto-artistico.html"
            target="_blank" rel="noopener">Archaeoacoustics meets dystopia: a sound story as a work of art</a>
          <p>domus magazine</p>
          <p>[IT/EN]</p>
        </div>

        <div>
          <a href="https://www.youtube.com/watch?v=ybdhXAqMagI&amp;frags=pl%2Cwn" target="_blank"
            rel="noopener">Q-rated</a>
          <p>[IT]</p>
        </div>

        <div>
          <a href="https://formeuniche.org/intervista-collettivo-almare/" target="_blank"
            rel="noopener">FormeUniche</a>
          <p>[IT]</p>
        </div>

        <div>
          <a href="http://atpdiary.com/intervista-con-almare/" target="_blank" rel="noopener">ATP Diary</a>
          <p>[IT]</p>
        </div>

      </div>
    </div>
    
  </div>
</section>

<?= snippet('footer') ?>