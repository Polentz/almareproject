<?php
Kirby::plugin('almareproject/custom-blocks', [
    'blueprints' => [
        'blocks/menublock' => __DIR__ . '/blueprints/blocks/menublock.yml',
        'blocks/event' => __DIR__ . '/blueprints/blocks/event.yml',
        'blocks/cover' => __DIR__ . '/blueprints/blocks/cover.yml',
      ],
      'snippets' => [
        'blocks/menublock' => __DIR__ . '/snippets/blocks/menublock.php',
        'blocks/event' => __DIR__ . '/snippets/blocks/event.php',
        'blocks/cover' => __DIR__ . '/snippets/blocks/cover.php',
      ],
]);