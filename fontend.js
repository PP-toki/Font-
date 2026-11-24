const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const togglePass = document.getElementById("togglePass");
const errorMsg = document.getElementById("errorMsg");

// ปุ่มแสดง/ซ่อนรหัสผ่าน
togglePass.addEventListener("click", () => {
    const hidden = passwordInput.type === "password";
    passwordInput.type = hidden ? "text" : "password";
    togglePass.textContent = hidden ? "ซ่อน" : "แสดง";
    togglePass.setAttribute("aria-label", hidden ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน");
});

// ล้างข้อความแจ้งเตือนเมื่อเริ่มพิมพ์
[usernameInput, passwordInput].forEach((input) => {
    input.addEventListener("input", () => {
        input.classList.remove("invalid");
        errorMsg.textContent = "";
    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    usernameInput.classList.toggle("invalid", !username);
    passwordInput.classList.toggle("invalid", !password);

    if (!username || !password) {
        errorMsg.textContent = "กรุณากรอก Username และ Password ให้ครบถ้วน";
        return;
    }

    // TODO: เชื่อมต่อกับระบบตรวจสอบสิทธิ์จริง (เช่น ส่งไปยัง backend)
    errorMsg.textContent = "";
    alert(`ยินดีต้อนรับ ${username}`);
});
