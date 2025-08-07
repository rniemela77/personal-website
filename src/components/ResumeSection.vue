<template>
    <div class="resume-links">
        <a href="/assets/RobertNiemela_Frontend_Developer_Resume.pdf" target="_blank" class="resume-link">
            <img src="/assets/icons/open-new-tab.svg" alt="PDF Icon" class="pdf-icon" />
            View Resume
        </a>
        <a href="/assets/RobertNiemela_Frontend_Developer_Resume.pdf" download class="resume-link">
            <img src="/assets/icons/download.svg" alt="PDF Icon" class="pdf-icon" />
            Download PDF
        </a>
    </div>
</template>

<style scoped>
.resume-links {
    display: flex;
    gap: 20px;

    @media (max-width: 600px) {
        flex-direction: column;
        justify-content: center;
    }
}

.resume-link {
    text-decoration: none;
    padding: 10px 20px;
    background: #3BD496;
    color: #000;
    border: 1px solid transparent;
    border-radius: 5px;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 1.2rem;

    img {
        transition: all 0.3s ease;
        filter: brightness(0);
    }
}

.resume-link:hover {
    background: transparent;
    background: white;
    box-shadow: 0 0 10px 2px rgba(59, 212, 150, 0.8);
    transform: translateY(-2px);
}
</style>