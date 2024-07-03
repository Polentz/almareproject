<div class="gallery-block">
  <ul class="gallery-grid">
    <?php foreach ($block->images()->toFiles() as $image): ?>
    <li class="gallery-item">
        <?php if ($image->link()->isNotEmpty()) : ?>
            <a href="<?= $image->link()->url() ?>" target="_blank" rel="noopener noreferrer" class="item-preview">
                <?= $image ?>
                <?= $image->caption() ?>
            </a>
        <?php else : ?>
            <div class="item-preview">
                <?= $image ?>
                <?= $image->caption() ?>
            </div>
        <?php endif ?>
        <?php if ($image->text()->isNotEmpty()) : ?>
            <div class="item-content">
                <div class="item-content-wrapper">
                    <?= $image->text() ?>
                </div>
                <div class="close-btn">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 1L12 12M12 12L1 23M12 12L1 1M12 12L23 23" />
                    </svg>
                </div>
            </div>
        <?php endif ?>
    </li>
    <?php endforeach ?>
  </ul>
</div>