# phieu-lib — Kho phiếu học tập trích từ KHBD

Trích tự động từ Phụ lục "Phiếu học tập" của 278 KHBD Sinh học + Công nghệ nông nghiệp
(khối 10–12), kiểm chứng đối chiếu DKSP trong cùng KHBD. Sinh ngày 18/11/2026.

- `manifest.json`: danh mục 625 đơn vị phiếu. Mỗi mục có `loai`
  (bang-dien / doan-van-dien / cau-hoi-ngan / ghi-ket-qua / khac), `soO`, `soODaDien`,
  cờ `sanSangVideo` và `thieuDapAn`.
- Chỉ 79 đơn vị `sanSangVideo: true` có file dữ liệu đáp án đi kèm, tại
  `<subjectCode>/<grade>/<lessonCode>/<id>.json`, cấu trúc tương thích mẫu tay Bài 9
  Sinh 10: `{bai, fileNguon, cauHoiPhieu, cacO: [{so, dapAn, tieuChi, cot, hang, cotSo}],
  bangDapAnGV}`.
- Đáp án CHỈ lấy từ (a) bản phiếu đã điền sẵn trong chính KHBD, hoặc (b) đoạn Dự kiến
  sản phẩm (DKSP) mở đầu bằng nhãn hàng của bảng phiếu. Ô không có nguồn thì để trống
  và gắn cờ `thieuDapAn` trong manifest — tuyệt đối không tự chế đáp án.
- Khoá nối với sgk-lib: `subjectCode` (`sinh`/`cnnn`), `grade`, `lessonCode` (`bai-N`,
  `cd-bNN`, `cd-otNN`...).
