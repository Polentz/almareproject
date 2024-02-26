<?php
Kirby::plugin('almareproject/custom-blocks', [
    'blueprints' => [
        'blocks/menu' => __DIR__ . '/blueprints/blocks/menu.yml',
        'blocks/event' => __DIR__ . '/blueprints/blocks/event.yml',
        'blocks/audio' => __DIR__ . '/blueprints/blocks/audio.yml',
      ],
      'snippets' => [
        'blocks/menu' => __DIR__ . '/snippets/blocks/menu.php',
        'blocks/event' => __DIR__ . '/snippets/blocks/event.php',
        'blocks/audio' => __DIR__ . '/snippets/blocks/audio.php',
      ],
]);