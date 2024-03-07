<?php
    if ($kirby->language()->code() == 'en') {
        $href = 'it';
    } else if ($kirby->language()->code() == 'it') {
        $href = 'en';
    }
?>

<nav class="nav">
    <button class="menu-item menu-opener">Menu</button>
    <menu class="menu main-menu">
        <ul class="menu-items">
            <?php $menuItems = $site->mixedMenu()->toStructure(); ?>
            <?php if ($menuItems->isNotEmpty()) : ?>
                <?php foreach ($menuItems as $menuItem) : ?>
                <li class="menu-item<?= ($p = $menuItem->link()->toPage()) && $p->isOpen() ? ' --current' : '' ?>" style="--color: <?= $menuItem->color() ?>;">
                    <a href="<?= $menuItem->link()->toUrl() ?>"><?= $menuItem->linkTitle()->or($menuItem->link()->html()) ?></a>
                </li>
                <?php endforeach ?>
            <?php endif ?>
        </ul>
    </menu>
    <menu class="menu dropdown-menu">
        <ul class="dropdown-menu-items">
            <li class="menu-item lang-btn"><a href="<?= $page->url($href) ?>" hreflang="<?php echo $href ?>">EN/IT</a></li>
        </ul>
        <?= $site->blocks()->toBlocks() ?>
        <ul class="dropdown-menu-items">
            <li class="menu-item agenda-btn"><a class="js-href" href="#agenda">Agenda</a></li>
            <li class="menu-item slider-btn"><a><?= $site->sliderLabel() ?></a></li>
        </ul>
    </menu>
</nav>