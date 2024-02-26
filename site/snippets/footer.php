    <footer class="footer">
        <p>© <?= $site->footer() ?> ALMARE</p>
        <p>Design &amp; Code Giulia Polenta</p>
    </footer>
    
    <noscript>Please turn on JS to navigate this website</noscript>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <?= js([
        'assets/js/script.js',
        '@auto',
    ]) ?>
</body>
</html>