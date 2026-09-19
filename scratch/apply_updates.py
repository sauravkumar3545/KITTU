import os

html_path = r'c:\Users\saurav\OneDrive\Desktop\KITTU\index.html'

with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix remaining Priya Modi and Backend Developer
content = content.replace('Backend Developer — Project Experience', 'Java Developer — Project Experience')
content = content.replace('title="Click to view LinkedIn: Priya Modi"', 'title="Click to view LinkedIn: Lucky Priya"')

# Update exact LinkedIn & GitHub links
linkedin_exact = 'https://www.linkedin.com/in/lucky-priya-6648a740/a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHT%2BeV94cRs6Q3fRQC5S7Lw%3D%3D'
github_exact = 'https://github.com/PriyaModi1309'

# Contact section links
content = content.replace(
    'href="https://github.com" target="_blank" rel="noopener noreferrer" class="contact-box-card" title="Click to open GitHub: PriyaModi1309"',
    f'href="{github_exact}" target="_blank" rel="noopener noreferrer" class="contact-box-card" title="Click to open GitHub: PriyaModi1309"'
)
content = content.replace(
    'href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" class="contact-box-card" title="Click to view LinkedIn: Lucky Priya"',
    f'href="{linkedin_exact}" target="_blank" rel="noopener noreferrer" class="contact-box-card" title="Click to view LinkedIn: Lucky Priya"'
)

# Footer links
content = content.replace(
    '<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" class="social-circle-btn" title="LinkedIn Profile"',
    f'<a href="{linkedin_exact}" target="_blank" rel="noopener noreferrer" class="social-circle-btn" title="LinkedIn Profile"'
)
content = content.replace(
    '<a href="https://github.com" target="_blank" rel="noopener noreferrer" class="social-circle-btn" title="GitHub Profile"',
    f'<a href="{github_exact}" target="_blank" rel="noopener noreferrer" class="social-circle-btn" title="GitHub Profile"'
)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Applied all updates to index.html successfully')
