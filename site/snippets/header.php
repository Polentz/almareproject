<!DOCTYPE html>
<html lang="<?= $lang ?>">
<head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-CEVSH81RBK"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-CEVSH81RBK');
    </script>
    <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/ab4354239c52e1795edd9264/script.js"></script>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $site->title() ?></title>
    <meta name="description"
        content="<?= $site->description() ?>">
    <link rel="canonical" href="<?= $page->url() ?>">
    <meta name="keywords"
        content="<?= $site->keywords() ?>">
    <meta property="og:locale" content="<?= $langCode ?>">
    <meta property="og:type" content="website">
    <meta property="og:title" content="<?= $site->title()?>">
    <meta property="og:description"
        content="<?= $site->description() ?>">
    <meta property="og:url" content="<?= $page->url() ?>">
    <meta property="og:site_name" content="<?= $site->title()?>">
    <?php if ($site->ogimage()->isNotEmpty()) : ?>
        <meta property="og:image" content="<?= $site->ogimage()->toFile()->url() ?>">
        <meta property="og:image:alt" content="<?= $site->ogimage()->toFile()->alt() ?>">
    <?php endif ?>
    <meta name="twitter:card" content="summary">
    <meta name="twitter:description"
        content="<?= $site->description() ?>">
    <meta name="twitter:title"
        content="<?= $site->title()?>">
    <?php if ($site->ogimage()->isNotEmpty()) : ?>
        <meta name="twitter:image:alt" content="<?= $site->ogimage()->toFile()->alt() ?>">
    <?php endif ?>
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
    <link rel="shortcut icon" type="image/png" sizes="32x32" href="/assets/favicons/ALMARE-32px.png">
    <link rel="shortcut icon" type="image/png" sizes="256x256" href="/assets/favicons/ALMARE-256px.png">
    <?= css ([
        'assets/css/base.css',
        'assets/css/style.css',
        '@auto',
    ]) ?>
</head>
<body>
    <header class="header">
        <?= snippet('nav') ?>
    </header>
    <div class="logo">
        <?php $logo = $site->logo()->toFile() ?>
        <h1><img src="<?= $logo->url() ?>" width="100%" alt="ALMARE logo"></h1>
    </div>