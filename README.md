# FLOW

**给摄影师的 macOS 选片工具** · *A macOS photo culling tool for photographers*

> 选片，不该熬夜。拍得多，选得快。
> *Culling shouldn't keep you up at night. Shoot more, pick faster.*

---

## 简介 · Introduction

FLOW 是一款**本地运行**的 macOS 照片选片（culling）工具。摄影师拍完一场动辄几百上千张的 RAW，最耗时、最累人的往往不是拍摄，而是逐张筛片。FLOW 把这一步做到极简：**全屏一张一张看，一键「去 / 留 / 待定」**，设好目标张数、选够即停，最后把挑好的照片一键导出交付。所有处理都在你的 Mac 本地完成——**照片不上传、不中转、不删除原图**。

FLOW is a **local-first** macOS photo culling tool. The slowest, most draining part of a shoot isn't taking the photos — it's going through hundreds or thousands of RAW files afterward. FLOW strips this down to the essentials: **review photos fullscreen one at a time, mark each with a single keystroke as Discard / Keep / Pending**, stop when you hit your target count, then export the selection. Everything runs locally on your Mac — **your photos are never uploaded, never proxied, and never deleted**.

---

## 功能特点 · Features

### 1. 全程本地 · Local & Private
照片文件不离开你的 Mac，隐私与速度兼得。
*Photos never leave your Mac — privacy and speed in one.*

### 2. 原生 RAW 支持 · Native RAW Support
CR3 / RAF / NEF / ARW / DNG / ORF / RW2 直接预览，无需先转格式。
*Preview CR3 / RAF / NEF / ARW / DNG / ORF / RW2 directly — no conversion needed.*

### 3. 全屏「去 / 留 / 待定」 · Fullscreen Discard / Keep / Pending
一次只看一张，三态一键决定，快捷键顺手，不打断节奏。
*One photo at a time; three states at a single keystroke. No broken flow.*

### 4. 目标数量提醒 · Target Count Reminder
设好交付张数，选够即停，避免多选返工。
*Set your delivery count and stop the moment you hit it — no over-picking.*

### 5. 断点续选 · Resume Where You Left Off
随时关掉，下次打开接着上次的位置继续，进度不丢。
*Close anytime; reopen and continue exactly where you stopped.*

### 6. 待定对比双框 · Pending Side-by-Side Compare
点击待定缩略图，左右双框同屏对比；触控板捏合缩放、双指平移。
*Tap a pending thumbnail to compare two shots side by side; pinch to zoom and pan with the trackpad.*

### 7. 逐张加密备注 · Per-Photo Encrypted Notes
每张照片都能写备注，AES-256-GCM 加密存在本机，只有你能看到。
*Annotate any photo; notes are encrypted with AES-256-GCM and stored locally, visible only to you.*

### 8. 固定放大 + 进度条拖动定位 · Pinned Zoom + Draggable Seek Bar
一键固定放大看细节，进度条拖动秒定位，RAW 对焦一眼看清。
*Pin the zoom to inspect detail, drag the progress bar to jump anywhere, and check RAW focus at a glance.*

### 9. 已选画册拼贴 · Kept Mosaic Collage
已选照片按横竖自动拼成画册，滚动聚焦，点击放大，一键另存。
*Kept photos are auto-arranged into a mosaic by orientation — scroll, focus, and export in one click.*

### 10. 多任务卡片 + 侧边栏 · Multi-Task Cards + Sidebar
多个选片任务一目了然，侧边栏快速切换，进度随时保存。
*Keep multiple culling jobs in view, switch instantly from the sidebar, and your progress is always saved.*

### 11. 自动扫描 + 自定义快捷键 · Auto-Scan + Custom Shortcuts
定时自动扫描文件夹里的新照片；去留待定、翻页、缩放都有自定义快捷键。
*Auto-scan the folder for new photos on a schedule; every action — discard/keep/pending, navigate, zoom — is on a custom shortcut.*

### 12. 液态玻璃界面 · Liquid Glass UI
原生 Liquid Glass 质感，顶栏底栏半透明悬浮，沉浸式过片。
*Native Liquid Glass surfaces with translucent floating bars for an immersive review experience.*

---

## 2.6 版本新特性 · What's New in 2.6

### 🏷 去 / 留 / 待定，三态筛选 · Three-State Culling
多一个「待定」，拿不准的先放一放，回头再一起决定，不手滑、不漏片。
*A new "Pending" state: park the maybes and decide later — no accidental picks, no missed keepers.*

### 🔍 待定对比双框 · Pending Side-by-Side Compare
点击待定缩略图，左右双框同屏对比，触控板缩放平移看得清每一处细节。
*Tap a pending thumbnail for a side-by-side comparison; pinch and pan to see every detail.*

### 📝 逐张加密备注 · Per-Photo Encrypted Notes
每张照片都能写备注，AES-256-GCM 加密存在本机，隐私不外泄。
*Write notes on any photo; encrypted locally with AES-256-GCM, so your annotations stay private.*

### 🎚 拖动进度条 + 固定放大 · Draggable Seek Bar + Pinned Zoom
进度条一拖秒定位，固定放大看细节，RAW 对焦一眼看清。
*Drag the progress bar to jump instantly; pin the zoom to inspect detail and verify RAW focus.*

### 🧭 侧边栏「更多功能拓展中」 · Sidebar "More Coming Soon"
左侧侧边栏预留「更多功能」入口，后续版本持续扩展。
*The sidebar reserves a "more features" entry — more to come in future releases.*

### ⚡ 性能优化 · Performance
放大不再重载缩略图、带预算的缩略图缓存、后台扫描与持久化，大图库更顺滑。
*Zoom no longer reloads thumbnails; budgeted thumbnail caching, background scanning and persistence make large libraries smoother.*

---

## 安装与系统要求 · Install & Requirements

| 项目 · Item | 说明 · Details |
| --- | --- |
| 系统 · OS | macOS 13 及以上 · macOS 13+ |
| 价格 · Price | 完全免费 · Free |
| 大小 · Size | 约 1.1 MB · ~1.1 MB |
| 安装 · Install | 打开 DMG，把 FLOW 拖入「应用程序」· Open the DMG and drag FLOW into Applications |

> 首次打开：macOS 会提示「无法验证开发者」，右键（或按住 Control 点击）FLOW → 选「打开」→ 弹窗里再点「打开」即可。
> *First launch: macOS may warn about an unidentified developer. Right-click (or Control-click) FLOW → Open → Open again in the dialog.*

---

## 隐私 · Privacy

- **照片只在你的 Mac 上处理** —— 全程本地读取，绝不上传、不中转、不删除原图。
  *Photos are processed only on your Mac — read locally, never uploaded, proxied, or deleted.*
- **无任何网络请求** —— 没有账号系统、没有云同步、没有广告追踪。
  *No network requests — no accounts, no cloud sync, no ad tracking.*
- **选片进度与备注仅保存在本机** —— 备注采用 AES-256-GCM 加密，可随时删除。
  *Progress and notes are stored only on this device; notes are AES-256-GCM encrypted and deletable anytime.*

---

© 2026 FLOW · 给摄影师的 macOS 选片工具 · *A macOS photo culling tool for photographers*
