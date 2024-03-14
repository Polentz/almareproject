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
        <?php $poster = $block->poster()->toFile() ?>
        <video src="<?= $video->url() ?>" controls loop controlslist="noplaybackrate nodownload" disablePictureInPicture
        <?php if ($block->toggle()->toBool() === true) : ?>
            autoplay muted
        <?php endif ?>
        <?php if ($poster) : ?> poster="<?= $poster->url() ?>"<?php endif ?> type="video"></video>
        <?php if ($block->caption()->isNotEmpty()): ?>
            <figcaption><?= $block->caption() ?></figcaption>
        <?php endif ?>
    </figure>
<?php endif ?>