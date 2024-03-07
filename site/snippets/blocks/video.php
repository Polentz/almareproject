<?php
use Kirby\Cms\Html;
?>
<?php if ($video = Html::video($block->url())): ?>
<figure class="video-block">
  <?= $video ?>
  <?php if ($block->caption()->isNotEmpty()): ?>
      <figcaption><?= $block->caption() ?></figcaption>
  <?php endif ?>
</figure>
<?php elseif ($video = $block->video()->toFile()) : ?>
    <figure class="video-block">
        <video src="<?= $video->url() ?>" controls autoplay muted loop controlslist="noplaybackrate nodownload" disablePictureInPicture type="video"></video>
        <?php if ($block->caption()->isNotEmpty()): ?>
            <figcaption><?= $block->caption() ?></figcaption>
        <?php endif ?>
    </figure>
<?php endif ?>