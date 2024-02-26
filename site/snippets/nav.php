<nav class="nav">
    <menu class="menu">
        <button class="menu-item menu-opener">Menu</button>
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
    </menu>
</nav>