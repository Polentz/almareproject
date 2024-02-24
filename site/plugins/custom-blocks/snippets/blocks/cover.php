<div class="cover-image">
    <?php $image = $block->cover()->toFile() ?>
    <?php $src = $image->url(); ?>
    <img src="<?= $src ?>">
</div>