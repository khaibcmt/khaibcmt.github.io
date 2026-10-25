// =========================================================================
// FILE CẬP NHẬT DỮ LIỆU HỌC LIỆU & MENU - KHAI SYSTEM
// Sau này muốn thêm, sửa, xóa chỉ cần chỉnh sửa nội dung trong file này!
// =========================================================================

// 1. CẤU HÌNH CÁC ỨNG DỤNG TRÊN THANH SIDEBAR BÊN TRÁI
const APPS_CONFIG = [
  {
    category: "Ứng dụng Giảng dạy",
    items: [
      { id: "biomaster", name: "BioMaster AI", url: "/biomaster-ai/", icon: "fa-solid fa-dna", color: "#3fb950" },
      { id: "trochoi", name: "Trò Chơi Học Tập", url: "/trochoi/", icon: "fa-solid fa-gamepad", color: "#d29922" }
    ]
  }
];

// 2. KHO TÀI NGUYÊN HỌC LIỆU (GIÁO ÁN, ĐỀ THI, POWERPOINT)
// - type: "giaoan" (Giáo án/KHBD), "dethi" (Đề kiểm tra), "ppt" (Bài giảng PowerPoint)
// - grade: "10", "11", hoặc "12"
// - subject: "Sinh học", "Công nghệ", "Vật lý", "Khác"...
// - downloadUrl: Link tải file từ Google Drive, OneDrive hoặc file nội bộ
const RESOURCES_DATA = [
  // --- MẪU GIÁO ÁN / KHBD ---
  {
    id: 1,
    type: "giaoan",
    title: "KHBD Bài 13: Khái quát về chuyển hóa vật chất và năng lượng",
    subject: "Sinh học",
    grade: "11",
    book: "Kết nối tri thức",
    tag: "Chuẩn CV 5512 - Năng lực số",
    updatedDate: "25/10/2026",
    downloadUrl: "#", // Thay bằng link Google Drive tải file .docx của bạn
    description: "Kế hoạch bài dạy chuẩn công văn 5512, tích hợp năng lực số và ứng dụng AI."
  },
  {
    id: 2,
    type: "giaoan",
    title: "KHBD Bài 2: Công nghệ và đời sống",
    subject: "Công nghệ",
    grade: "10",
    book: "Kết nối tri thức",
    tag: "Chuẩn CV 5512",
    updatedDate: "20/10/2026",
    downloadUrl: "#",
    description: "Giáo án 2 cột, bảng hoạt động hình thành kiến thức chuẩn quy định."
  },

  // --- MẪU KHO ĐỀ KIỂM TRA ---
  {
    id: 3,
    type: "dethi",
    title: "Đề ôn tập Giữa kỳ 1 - Sinh học 11 (Cấu trúc mới GDPT 2018)",
    subject: "Sinh học",
    grade: "11",
    book: "Kết nối tri thức",
    tag: "Đúng/Sai + Điền khuyết",
    updatedDate: "24/10/2026",
    downloadUrl: "#",
    description: "Bộ đề trắc nghiệm khách quan gồm 3 phần: Trắc nghiệm 4 lựa chọn, Đúng/Sai và Trả lời ngắn có kèm ma trận đặc tả."
  },

  // --- MẪU SLIDE POWERPOINT ---
  {
    id: 4,
    type: "ppt",
    title: "Slide Bài giảng: Cấu tạo và chức năng của Tế bào nhân thực",
    subject: "Sinh học",
    grade: "10",
    book: "Kết nối tri thức",
    tag: "Có Video & Minigame",
    updatedDate: "22/10/2026",
    downloadUrl: "#",
    description: "Bộ slide PowerPoint thiết kế hiện đại, có tích hợp câu hỏi khởi động và sơ đồ minh họa sinh động."
  }
];
