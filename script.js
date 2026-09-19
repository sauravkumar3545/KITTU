/**
 * LUCKY PRIYA - JAVA DEVELOPER PORTFOLIO
 * Vanilla JavaScript (No Frameworks, Pure Clean Code)
 */

document.addEventListener('DOMContentLoaded', () => {

  /* =========================================================
     1. PROJECT DATA REPOSITORY (For Modal Interaction)
     ========================================================= */
  const projectsData = {
    1: {
      title: "Employee Management System",
      subtitle: "Java | Spring Boot | MySQL | JPA | Hibernate",
      badge: "Demo Project",
      description: "A comprehensive enterprise backend application designed for managing organizational employee records with resilient RESTful APIs and relational database persistence. Incorporates pagination, input validation, custom error handling, and transactional safety.",
      technologies: ["Java 17+", "Spring Boot", "Spring Data JPA", "Hibernate", "MySQL", "REST APIs", "Maven"],
      architecture: "Client Request → EmployeeController → EmployeeService → EmployeeRepository → MySQL Database",
      features: [
        "Create, read, update, and delete (CRUD) employee records via RESTful endpoints",
        "Search employees by department, designation, and name with dynamic query filters",
        "Input validation using Hibernate Validator (@Valid, @NotNull, @Size)",
        "Global exception handling with custom error responses (@ControllerAdvice)",
        "Data persistence using Spring Data JPA with MySQL relational schemas",
        "Comprehensive API documentation and Postman collections for endpoint testing"
      ],
      githubUrl: "https://github.com/PriyaModi1309",
      liveDemoNote: "Demo Project: Mock backend service configured."
    },
    2: {
      title: "E-Commerce Backend API",
      subtitle: "Java | Spring Boot | Spring Security | MySQL | JPA",
      badge: "Demo Project",
      description: "A scalable backend REST API designed for high-throughput modern e-commerce systems. Supports user registration, secure session authentication, product catalogs, relational cart management, order placement workflows, and role-based permissions.",
      technologies: ["Java 17+", "Spring Boot", "Spring Security", "JWT Authentication", "MySQL", "Hibernate", "JPA"],
      architecture: "Client Request → Security Filter Chain → Order/Product Controllers → Domain Services → Repositories → MySQL Database",
      features: [
        "User registration and secure authentication with BCrypt password hashing",
        "Role-based access control (RBAC) supporting Customer and Admin privileges",
        "Product catalog management with category filters, inventory status, and price queries",
        "Persistent shopping cart and relational item aggregation",
        "Order processing pipeline with transactional ACID compliance",
        "Clean REST API error contracts with HTTP status code mappings"
      ],
      githubUrl: "https://github.com/PriyaModi1309",
      liveDemoNote: "Demo Project: Mock backend service configured."
    },
    3: {
      title: "Banking Management System",
      subtitle: "Java | Spring Boot | MySQL | REST API | Transactions",
      badge: "Demo Project",
      description: "A robust financial ledger and customer banking backend system built with Spring Boot. Focuses on strict transactional reliability (@Transactional), account balance integrity, transfer audits, and exception-safe ledger state handling.",
      technologies: ["Java 17+", "Spring Boot", "Spring Data JPA", "MySQL", "REST APIs", "ACID Transactions"],
      architecture: "Account Request → BankAccountController → BankingService (Transaction Boundary) → AccountRepository → MySQL Database",
      features: [
        "Account creation and customer profile onboarding with unique account numbers",
        "Real-time funds deposit and withdrawal with account balance verification",
        "Account-to-account funds transfer governed by atomic database transactions",
        "Transaction history tracking and statement log generation",
        "Custom banking domain exceptions (InsufficientBalanceException, AccountNotFoundException)",
        "Secure REST endpoints with structured JSON responses"
      ],
      githubUrl: "https://github.com/PriyaModi1309",
      liveDemoNote: "Demo Project: Mock backend service configured."
    },
    4: {
      title: "Task Management REST API",
      subtitle: "Java | Spring Boot | Spring Security | MySQL | JPA",
      badge: "Demo Project",
      description: "A collaborative productivity and task lifecycle management API. Allows registered developers and team members to create tasks, assign priorities, organize by statuses, and filter assignments with user-isolated data security.",
      technologies: ["Java 17+", "Spring Boot", "Spring Security", "MySQL", "Hibernate", "JPA", "Maven"],
      architecture: "Task Request → Auth Filter → TaskController → TaskService → TaskRepository → MySQL Database",
      features: [
        "User authentication and task data isolation per user account",
        "CRUD endpoints for managing individual and team tasks",
        "Task lifecycle workflow transitions (PENDING → IN_PROGRESS → COMPLETED)",
        "Priority flags (LOW, MEDIUM, HIGH, CRITICAL) and deadline query filters",
        "Sorting and pagination for task list retrieval",
        "Integration-tested endpoints with standard HTTP REST specifications"
      ],
      githubUrl: "https://github.com/PriyaModi1309",
      liveDemoNote: "Demo Project: Mock backend service configured."
    }
  };

  /* =========================================================
     2. DYNAMIC PROFILE PHOTO UPLOAD & LOCAL STORAGE
     ========================================================= */
  const profileContainer = document.getElementById('profile-container');
  const profileImage = document.getElementById('profile-image');
  const profileUploadInput = document.getElementById('profile-upload-input');
  const btnTriggerUpload = document.getElementById('btn-trigger-upload');
  const btnResetPhoto = document.getElementById('btn-reset-photo');

  const STORAGE_KEY = 'lucky_priya_portfolio_avatar';
  const DEFAULT_IMAGE_PATH = 'assets/profile.jpg';

  // Load custom photo from localStorage if previously uploaded
  function loadSavedPhoto() {
    try {
      const savedPhoto = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('priya_modi_portfolio_avatar');
      if (savedPhoto && profileImage) {
        profileImage.src = savedPhoto;
        if (btnResetPhoto) btnResetPhoto.style.display = 'inline-block';
      }
    } catch (e) {
      console.warn('LocalStorage access issue:', e);
    }
  }
  loadSavedPhoto();

  // Click handler to open file picker
  if (profileContainer && profileUploadInput) {
    profileContainer.addEventListener('click', (e) => {
      // Don't double trigger if clicking input directly
      if (e.target !== profileUploadInput) {
        profileUploadInput.click();
      }
    });
  }

  if (btnTriggerUpload && profileUploadInput) {
    btnTriggerUpload.addEventListener('click', () => {
      profileUploadInput.click();
    });
  }

  // Handle image selection
  if (profileUploadInput) {
    profileUploadInput.addEventListener('change', (event) => {
      const file = event.target.files && event.target.files[0];
      if (!file) return;

      // Validate image type
      if (!file.type.startsWith('image/')) {
        showToast('Please select a valid image file (JPG, PNG, WEBP)', 'info');
        return;
      }

      // Read file via FileReader
      const reader = new FileReader();
      reader.onload = function(e) {
        const resultUrl = e.target.result;
        profileImage.src = resultUrl;
        
        try {
          localStorage.setItem(STORAGE_KEY, resultUrl);
          if (btnResetPhoto) btnResetPhoto.style.display = 'inline-block';
          showToast('Profile photo updated successfully! 📸', 'success');
        } catch (storageErr) {
          // If localstorage quota exceeded for large images, still update current page view
          showToast('Photo updated for this session!', 'info');
        }
      };
      reader.readAsDataURL(file);
    });
  }

  // Reset to default photo
  if (btnResetPhoto) {
    btnResetPhoto.addEventListener('click', () => {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (e) {}
      if (profileImage) profileImage.src = DEFAULT_IMAGE_PATH;
      btnResetPhoto.style.display = 'none';
      if (profileUploadInput) profileUploadInput.value = '';
      showToast('Restored default profile image', 'info');
    });
  }

  /* =========================================================
     3. MOBILE NAVBAR & HAMBURGER MENU
     ========================================================= */
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const navbar = document.getElementById('navbar');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      hamburgerBtn.classList.toggle('active', isOpen);
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when clicking on any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* =========================================================
     4. NAVBAR SCROLL EFFECT & ACTIVE LINK HIGHLIGHTING
     ========================================================= */
  const sections = document.querySelectorAll('section[id]');

  function handleScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Navbar background blur/shadow on scroll
    if (navbar) {
      if (scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Active navigation item highlighting
    const navHeight = navbar ? navbar.offsetHeight : 76;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - navHeight - 60;
      const sectionId = current.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-menu a[href*='${sectionId}']`);

      if (matchingLink) {
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          matchingLink.classList.add('active');
        }
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial run

  /* =========================================================
     5. BACK TO TOP BUTTON
     ========================================================= */
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* =========================================================
     6. PROJECT DETAILS MODAL
     ========================================================= */
  const projectModal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const openModalBtns = document.querySelectorAll('.btn-view-modal, .btn-open-modal');

  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalBadge = document.getElementById('modal-badge');
  const modalDescription = document.getElementById('modal-description');
  const modalTech = document.getElementById('modal-tech');
  const modalArchitecture = document.getElementById('modal-architecture');
  const modalFeatures = document.getElementById('modal-features');
  const modalGithub = document.getElementById('modal-github');

  function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data || !projectModal) return;

    modalTitle.textContent = data.title;
    modalSubtitle.textContent = data.subtitle;
    modalBadge.textContent = data.badge;
    modalDescription.textContent = data.description;
    modalArchitecture.textContent = data.architecture;
    modalGithub.href = data.githubUrl;

    // Render technologies
    modalTech.innerHTML = '';
    data.technologies.forEach(tech => {
      const span = document.createElement('span');
      span.textContent = tech;
      modalTech.appendChild(span);
    });

    // Render features
    modalFeatures.innerHTML = '';
    data.features.forEach(feat => {
      const li = document.createElement('li');
      li.textContent = feat;
      modalFeatures.appendChild(li);
    });

    // Open modal
    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (projectModal) {
      projectModal.classList.remove('open');
      projectModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-project');
      openProjectModal(id);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  // Click on project card to open modal as well
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't trigger if clicked on link or button directly
      if (e.target.closest('a') || e.target.closest('button')) return;
      const id = card.getAttribute('data-project-id');
      if (id) openProjectModal(id);
    });
  });

  /* =========================================================
     7. CERTIFICATE PREVIEW MODAL
     ========================================================= */
  const certModal = document.getElementById('cert-modal');
  const certModalClose = document.getElementById('cert-modal-close');
  const certModalDone = document.getElementById('cert-modal-done');
  const certModalTitle = document.getElementById('cert-modal-title');
  const certModalIssuer = document.getElementById('cert-modal-issuer');
  const certModalYear = document.getElementById('cert-modal-year');
  const certBtns = document.querySelectorAll('.btn-cert-action, .btn-view-cert');

  function openCertModal(name, issuer, year) {
    if (!certModal) return;
    certModalTitle.textContent = name;
    certModalIssuer.textContent = `Issuer: ${issuer}`;
    certModalYear.textContent = year;
    certModal.classList.add('open');
    certModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCertModal() {
    if (certModal) {
      certModal.classList.remove('open');
      certModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  certBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.getAttribute('data-cert') || 'Java Certification';
      const issuer = btn.getAttribute('data-issuer') || 'Demo / Replace with actual issuer';
      const year = btn.getAttribute('data-year') || '2026';
      openCertModal(name, issuer, year);
    });
  });

  if (certModalClose) certModalClose.addEventListener('click', closeCertModal);
  if (certModalDone) certModalDone.addEventListener('click', closeCertModal);

  /* =========================================================
     8. GLOBAL MODAL CLOSE (Click Outside & Escape Key)
     ========================================================= */
  window.addEventListener('click', (e) => {
    if (projectModal && e.target === projectModal) {
      closeProjectModal();
    }
    if (certModal && e.target === certModal) {
      closeCertModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.keyCode === 27) {
      closeProjectModal();
      closeCertModal();
      if (navMenu && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        if (hamburgerBtn) {
          hamburgerBtn.classList.remove('active');
          hamburgerBtn.setAttribute('aria-expanded', 'false');
        }
        document.body.style.overflow = '';
      }
    }
  });

  /* =========================================================
     9. LIVE DEMO BUTTONS HANDLER
     ========================================================= */
  const liveMockBtns = document.querySelectorAll('.btn-card-demo, .btn-live-mock');
  liveMockBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      showToast('Demo Project: Ready for deployment in testing environment.', 'info');
    });
  });

  /* =========================================================
     10. CONTACT FORM VALIDATION & INTERACTION
     ========================================================= */
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');
  const successBanner = document.getElementById('form-success-banner');

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.classList.add('error');
        nameError.classList.add('visible');
        isValid = false;
      } else {
        nameInput.classList.remove('error');
        nameError.classList.remove('visible');
      }

      // Validate Email
      if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
        emailInput.classList.add('error');
        emailError.classList.add('visible');
        isValid = false;
      } else {
        emailInput.classList.remove('error');
        emailError.classList.remove('visible');
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        messageInput.classList.add('error');
        messageError.classList.add('visible');
        isValid = false;
      } else {
        messageInput.classList.remove('error');
        messageError.classList.remove('visible');
      }

      if (isValid) {
        // Show success state
        successBanner.classList.add('visible');
        showToast('Message sent successfully! Thank you.', 'success');
        contactForm.reset();

        // Hide success banner after 6 seconds
        setTimeout(() => {
          successBanner.classList.remove('visible');
        }, 6000);
      }
    });

    // Real-time error clearing on input
    [nameInput, emailInput, messageInput].forEach(input => {
      if (input) {
        input.addEventListener('input', () => {
          input.classList.remove('error');
          const errorElem = document.getElementById(`${input.name}-error`);
          if (errorElem) errorElem.classList.remove('visible');
        });
      }
    });
  }

  /* =========================================================
     11. TOAST NOTIFICATION UTILITY
     ========================================================= */
  function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'toastOut 0.3s forwards';
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 4000);
  }

  /* =========================================================
     12. AUTOMATIC CURRENT YEAR UPDATE
     ========================================================= */
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});
