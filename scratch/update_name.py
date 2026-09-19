import os

html_path = r'c:\Users\saurav\OneDrive\Desktop\KITTU\index.html'

with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Priya Modi with Lucky Priya
content = content.replace('Priya Modi | Java Developer | Backend Developer', 'Lucky Priya | Java Developer')
content = content.replace('Java Developer portfolio of Priya Modi', 'Java Developer portfolio of Lucky Priya')
content = content.replace('content="Priya Modi"', 'content="Lucky Priya"')
content = content.replace('aria-label="Priya Modi Home"', 'aria-label="Lucky Priya Home"')
content = content.replace('<span class="logo-name">Priya<span class="logo-reg">&reg;</span></span>', '<span class="logo-name">Lucky Priya<span class="logo-reg">&reg;</span></span>')
content = content.replace('Priya_Modi_Resume.pdf', 'Lucky_Priya_Resume.pdf')
content = content.replace("Priya Modi's Resume", "Lucky Priya's Resume")
content = content.replace('<h2 class="hero-name-badge">Priya Modi</h2>', '<h2 class="hero-name-badge">Lucky Priya</h2>')
content = content.replace('<h3 class="hero-headline">Java Developer <span class="divider">|</span> Backend Developer</h3>', '<h3 class="hero-headline">Java Developer</h3>')
content = content.replace('alt="Priya Modi - Java Developer"', 'alt="Lucky Priya - Java Developer"')
content = content.replace("Hi, I'm <strong>Priya Modi</strong>", "Hi, I'm <strong>Lucky Priya</strong>")
content = content.replace('PRIYA MODI', 'LUCKY PRIYA')
content = content.replace('<p class="rp-title">JAVA DEVELOPER | BACKEND DEVELOPER</p>', '<p class="rp-title">JAVA DEVELOPER</p>')
content = content.replace('title="GitHub - Priya Modi"', 'title="GitHub - Lucky Priya"')
content = content.replace('title="LinkedIn - Priya Modi"', 'title="LinkedIn - Lucky Priya"')
content = content.replace('<span class="card-txt-val">Priya Modi</span>', '<span class="card-txt-val">Lucky Priya</span>')
content = content.replace('<h4 class="footer-author-name">Priya Modi</h4>', '<h4 class="footer-author-name">Lucky Priya</h4>')
content = content.replace('<p class="footer-author-role">Java Developer | Backend Developer</p>', '<p class="footer-author-role">Java Developer</p>')
content = content.replace('&copy; <span id="current-year">2026</span> Priya Modi.', '&copy; <span id="current-year">2026</span> Lucky Priya.')

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated index.html successfully')
