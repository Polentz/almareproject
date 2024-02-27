<div class="slider-block">
    <?php if ($block->heading()->isNotEmpty()) : ?>
        <div class="slide-block-header --large-text">
            <?= $block->heading() ?>
        </div>
    <?php endif ?>
    <?php if ($block->copy()->isNotEmpty()) : ?>
        <div class="slider-block-content">
            <?= $block->copy()->kt() ?>
        </div>
    <?php endif ?>
</div>
