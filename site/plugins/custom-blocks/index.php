<?php
Kirby::plugin('almareproject/custom-blocks', [
    'blueprints' => [
        'blocks/menu' => __DIR__ . '/blueprints/blocks/menu.yml',
        'blocks/event' => __DIR__ . '/blueprints/blocks/event.yml',
        // 'blocks/cover' => __DIR__ . '/blueprints/blocks/cover.yml',
      ],
      'snippets' => [
        'blocks/menu' => __DIR__ . '/snippets/blocks/menu.php',
        'blocks/event' => __DIR__ . '/snippets/blocks/event.php',
        // 'blocks/cover' => __DIR__ . '/snippets/blocks/cover.php',
      ],
]);