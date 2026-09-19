# Update script.js
script_path = r'c:\Users\saurav\OneDrive\Desktop\KITTU\script.js'
with open(script_path, 'r', encoding='utf-8') as f:
    s = f.read()

s = s.replace('PRIYA MODI - JAVA DEVELOPER PORTFOLIO', 'LUCKY PRIYA - JAVA DEVELOPER PORTFOLIO')
s = s.replace('"https://github.com"', '"https://github.com/PriyaModi1309"')
s = s.replace("const STORAGE_KEY = 'priya_modi_portfolio_avatar';", "const STORAGE_KEY = 'lucky_priya_portfolio_avatar';")
# Fallback check for old key
s = s.replace(
    "const savedPhoto = localStorage.getItem(STORAGE_KEY);",
    "const savedPhoto = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('priya_modi_portfolio_avatar');"
)

with open(script_path, 'w', encoding='utf-8') as f:
    f.write(s)
print('Updated script.js successfully')

# Update resume.pdf with Lucky Priya - Java Developer
pdf_content = b'''%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 270 >>
stream
BT
/F1 22 Tf
50 720 Td
(LUCKY PRIYA - JAVA DEVELOPER) Tj
/F1 11 Tf
0 -30 Td
(Phone: +91 93417 73787 | Email: priyalucky1305@gmail.com | Kolkata, West Bengal) Tj
0 -22 Td
(GitHub: github.com/PriyaModi1309 | LinkedIn: linkedin.com/in/lucky-priya) Tj
0 -26 Td
(Java Developer focused on Core Java, Spring Boot, REST APIs, and Database Management.) Tj
0 -22 Td
(Skills: Core Java, OOP, Spring Boot, Spring MVC, REST APIs, JPA, Hibernate, MySQL, Git) Tj
0 -22 Td
(Projects: Employee Management System, E-Commerce Backend API, Banking System) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000000566 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
633
%%EOF
'''
with open(r'c:\Users\saurav\OneDrive\Desktop\KITTU\assets\resume.pdf', 'wb') as f:
    f.write(pdf_content)
print('Generated updated resume.pdf')
