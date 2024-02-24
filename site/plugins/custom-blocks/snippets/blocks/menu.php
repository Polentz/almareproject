<ul class="dropdown-menu-items">
    <?php $menuItems = $block->mixedDropdownMenu()->toStructure(); ?>
    <?php if ($menuItems->isNotEmpty()) : ?>
        <?php foreach ($menuItems as $menuItem) : ?>
            <li class="menu-item<?= ($p = $menuItem->link()->toPage()) && $p->isOpen() ? ' --current' : '' ?>"><a href="<?= $menuItem->link()->toUrl() ?>"><?= $menuItem->linkTitle()->or($menuItem->link()->html()) ?></a></li>
        <?php endforeach ?>
    <?php endif ?>
</ul>