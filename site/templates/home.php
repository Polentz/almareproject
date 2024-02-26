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

<section class="slider-content">
  <div class="close-btn">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23 1L12 12M12 12L1 23M12 12L1 1M12 12L23 23" />
    </svg>
  </div>
  <div class="slider-content-wrapper">
      <?= $site->sliderBlocks()->toBlocks() ?>
  </div>
</section>

<?= snippet('footer') ?>