    <footer class="footer">
        <p>© <?= date("Y") ?> ALMARE</p>
        <p>Design &amp; Code <a style="border-bottom: none;" href="https://www.iampolenta.com/" target="_blank" rel="noopener noreferrer">Giulia Polenta</a></p>
    </footer>
    
    <noscript>Please turn on JS to navigate this website</noscript>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <?= js([
        'assets/js/script.js',
        '@auto',
    ]) ?>
</body>
</html>