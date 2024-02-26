<?php if ($block->styleOptions()->isTrue()) : ?>
<div class="text-block --large-text">
<?php else : ?>
    <div class="text-block">
<?php endif ?>
    <?= $block->text() ?>
</div>