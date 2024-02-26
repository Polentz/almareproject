<nav class="nav">
    <button class="menu-item menu-opener">Menu</button>
    <menu class="menu main-menu">
        <ul class="menu-items">
            <?php $menuItems = $site->mixedMenu()->toStructure(); ?>
            <?php if ($menuItems->isNotEmpty()) : ?>
                <?php foreach ($menuItems as $menuItem) : ?>
                <li class="menu-item<?= ($p = $menuItem->link()->toPage()) && $p->isOpen() ? ' --current' : '' ?>" style="--color: <?= $menuItem->color() ?>;"><a href="<?= $menuItem->link()->toUrl() ?>"><?= $menuItem->linkTitle()->or($menuItem->link()->html()) ?></a></li>
                <?php endforeach ?>
            <?php endif ?>
        </ul>
    </menu>
    <menu class="menu dropdown-menu">
        <?= $site->blocks()->toBlocks() ?>
        <ul class="dropdown-menu-items">
            <?php ($eventBlock = $page->blocks()->filterBy('type', 'event')) ?>
            <?php if ($eventBlock->exists()) : ?>
                <li class="menu-item"><a class="js-href" href="#agenda">Agenda</a></li>
            <?php endif ?>
            <li class="menu-item slider-btn"><a>Text and Press</a></li>
        </ul>
    </menu>
</nav>