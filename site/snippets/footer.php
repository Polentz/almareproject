    <footer class="footer">
        <p>© <?= $site->footer() ?></p>
        <!-- 2022 ALMARE -->
        <p>Design &amp; Code Giulia Polenta</p>
    </footer>
    
    <noscript>Please turn on JS to navigate this website</noscript>
    <?= js([
        'assets/js/script.js',
        '@auto',
    ]) ?>
</body>
</html>