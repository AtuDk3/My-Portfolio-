# Hướng dẫn Deploy

## ✅ Đã hoàn thành:
1. Cấu hình Vite với base path `/My-Portfolio-/`
2. Cài đặt gh-pages package
3. Tạo script deploy trong package.json
4. Build và push code lên branch `gh-pages`

## 🔧 Bước tiếp theo (làm trên GitHub):

1. Truy cập: https://github.com/AtuDk3/My-Portfolio-/settings/pages

2. Trong phần **"Build and deployment"**:
   - Source: chọn **"Deploy from a branch"**
   - Branch: chọn **"gh-pages"** và folder **"/ (root)"**
   - Click **Save**

3. Đợi 1-2 phút để GitHub build

4. Website sẽ có tại: **https://atudK3.github.io/My-Portfolio-/**

## 📝 Deploy lại sau khi có thay đổi:

```bash
# Commit changes
git add .
git commit -m "Update portfolio"
git push origin main

# Deploy to GitHub Pages
npm run deploy
```

## 🔍 Kiểm tra deployment:
- Vào tab **Actions** trên GitHub để xem quá trình deploy
- Sau khi xong, truy cập link website

## ⚠️ Lưu ý:
- Đảm bảo repository là **Public** (không phải Private)
- Nếu không thấy branch `gh-pages`, refresh lại trang Settings
