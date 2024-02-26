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