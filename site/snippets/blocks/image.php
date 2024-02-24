<?php

    $alt     = $block->alt();
    $link    = $block->link();
    if ($image = $block->image()->toFile()) {
        $alt = $alt->or($image->alt());
        $src = $image->url();
    };
?>

<figure class="cover-image">
  <?php if ($link->isNotEmpty()): ?>
  <a href="<?= Str::esc($link->toUrl()) ?>">
    <img src="<?= $src ?>" alt="<?= $alt->esc() ?>">
  </a>
  <?php else: ?>
    <img src="<?= $src ?>" alt="<?= $alt->esc() ?>">
  <?php endif ?>
</figure>