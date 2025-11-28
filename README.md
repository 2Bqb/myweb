## 图片版权与署名建议
- 如果使用 Wikimedia Commons 的图片，优先选择 CC0/CC-BY 许可证的图像，并在图片下方或页面底部标注图片来源和作者（示例："图片：作者名 / Wikimedia Commons (CC BY 4.0)"）。
- 如果使用 Unsplash/Pexels/Pixabay 的图片，也请遵从各站点的使用条款并保留作者署名（如果需要）。

# 高达 (Gundam) 简介单页网站示例

这是一个简单的静态单页示例，用来介绍高达系列（Gundam）。页面内容为中文，包含概述、历史、代表作、机体、角色、画廊和嵌入视频。

## 文件结构
- `index.html` — 站点主文件（中文内容）
- `styles.css` — 样式表
- `script.js` — 小型 JS，用于响应式菜单
- `assets/` — 图片/图标等（示例中使用的是远程图片）

## 预览
在 PowerShell 中进入目录并打开页面：
```powershell
cd "D:\my website"
ii .\index.html
```
或者在 VS Code 中打开整个目录并使用 Live Server 等扩展预览：
```powershell
cd "D:\my website"
code .
# 然后在 VS Code 内安装/启用 Live Server 并启动
```

## 许可说明
页面示例图片使用了网络链接（示例图片），如果用于生产或发布，请替换为具有适当授权的图片资源并保留版权说明。

## 后续自定义建议
- 替换画廊与机体图片为更贴切的高达图片（保留授权或自行拍摄）
- 添加更多系列与时间线细节或交互性内容（例如弹窗、翻页时间轴）
- 添加语言切换功能（中/英）或可折叠详细信息

## 本地图片替换说明（机体与画廊）
当前站点使用了 `assets/images` 下的本地图片（示例为 SVG 占位图），若你需要替换它们，请使用下列文件名并放在 `assets/images/` 目录中：

- `rx78-2.jpg` — RX-78-2 高达
- `zaku-ii.jpg` — 扎古 II（Zaku II）
- `strike.jpg` — Strike 高达
- `unicorn.jpg` — 独角兽（Unicorn）
- `gallery1.jpg`, `gallery2.jpg`, `gallery3.jpg`, `gallery4.jpg` — 画廊图片

推荐图片规格（示例）：
- 宽度 1200px（或更高）用于 hero/展示，机体卡片图片建议 800x500；画廊略小，如 400x300。调整样式或使用 CSS `object-fit: cover` 来适应显示区域。

推荐图像来源（请保留授权和署名）：
- Wikimedia Commons（许多高质量、可免费使用的图片）
- Unsplash / Pixabay / Pexels（注意作者许可）

已完成：我已为你创建了 `assets/images` 下的 SVG 占位图（rx78-2.svg, zaku-ii.svg, strike.svg, unicorn.svg, gallery1-4.svg）。

如果你需要，我可以：
### 如何快速本地替换为 JPG/PNG（优先加载 JPG）
1. 把你想使用的图片命名为：
	- `rx78-2.jpg`, `zaku-ii.jpg`, `strike.jpg`, `unicorn.jpg` (机体)
	- `gallery1.jpg` ~ `gallery4.jpg` (画廊)
2. 把这些图片文件放到 `assets/images/` 目录下。
3. 页面会自动优先加载 `.jpg` 文件并在不存在时回退到现有 `.svg` 占位图，然后回退到远程示例图像。无需修改 `index.html`。

示例在 PowerShell 中将图片复制到 `assets/images`（假设你把图片放在 `C:\Users\<你>\Downloads`）：
```powershell
cd "D:\my website"
Copy-Item "C:\Users\<你>\Downloads\rx78-2.jpg" -Destination .\assets\images\
```
如果你已经把附件图片保存在某个文件夹（如 `C:\Users\<你>\Downloads`），请参考下面的命名并执行复制（示例）：

```powershell
cd "D:\my website"
Copy-Item "C:\Users\<你>\Downloads\<附件1>.jpg" -Destination .\assets\images\ -Force; Rename-Item -Path .\assets\images\"<附件1>.jpg" -NewName "zaku-ii.jpg"
Copy-Item "C:\Users\<你>\Downloads\<附件2>.jpg" -Destination .\assets\images\ -Force; Rename-Item -Path .\assets\images\"<附件2>.jpg" -NewName "rx78-2.jpg"
Copy-Item "C:\Users\<你>\Downloads\<附件3>.jpg" -Destination .\assets\images\ -Force; Rename-Item -Path .\assets\images\"<附件3>.jpg" -NewName "unicorn.jpg"
Copy-Item "C:\Users\<你>\Downloads\<附件4>.jpg" -Destination .\assets\images\ -Force; Rename-Item -Path .\assets\images\"<附件4>.jpg" -NewName "strike.jpg"
```

- 上述示例中 `<附件1..4>.jpg` 指你在 `Downloads`（或其它路径）里保存的图片文件名（来自你的附件）。
- 我按你的映射（附件顺序）将文件重命名为页面所需要的命名（`zaku-ii.jpg` -> 第二栏，`rx78-2.jpg` -> 第一栏，`unicorn.jpg` -> 第四栏，`strike.jpg` -> 第三栏）。
说明：
- 上述示例中 `<附件1..4>.jpg` 指你在 `Downloads`（或其它路径）里保存的图片文件名（来自你的附件）。
- 我按你的映射（附件顺序）将文件重命名为页面所需要的命名（`zaku-ii.jpg` -> 第二栏，`rx78-2.jpg` -> 第一栏，`unicorn.jpg` -> 第四栏，`strike.jpg` -> 第三栏）。
- 页面会根据图片的 `data-credit` 属性显示版权信息，如果你需要在页面下方写入来源（例如“© SOTSU・SUNRISE”），请在 `assets/images` 中的图片对应文件名前加入来源说明，或直接回复来源字符串，我会替你填入 `data-credit` 属性中。
- 上述示例中 `<附件1..4>.jpg` 指你在 `Downloads`（或其它路径）里保存的图片文件名（来自你的附件）。
- 我按你的映射（附件顺序）将文件重命名为页面所需要的命名（`zaku-ii.jpg` -> 第二栏，`rx78-2.jpg` -> 第一栏，`unicorn.jpg` -> 第四栏，`strike.jpg` -> 第三栏）。


若图片格式为 PNG 或 WebP，而你愿意使用这些格式，请把 `index.html` 中的 `src` 修改为对应扩展名，或告诉我我来替换为 `.png`/`.webp` 自动优先检查。

1) 帮你自动下载并插入来自 Wikimedia Commons 的可用图片（你需要明确授权、并确认可以接受我自动选择的图片）。
2) 仅把图片路径更新为你上传到 `assets/images` 后提供的具体文件名。

## 视频替换说明（Bilibili）
当前页面使用了 Bilibili 视频嵌入（BV1yf4y1P7KV），嵌入使用的是 Bilibili 播放器地址 `https://player.bilibili.com/player.html?bvid=BV...`。
如果你要替换为其它 Bilibili 视频，请按下列步骤操作：

1. 找到目标视频的 BV ID（例如 `BV1yf4y1P7KV`）。
2. 在 `index.html` 中找到 `section#video`，将 `iframe` 的 `src` 改为：
	```text
	https://player.bilibili.com/player.html?bvid=BVxxxxxx&page=1
	```
3. 同时更新 `video` 区段下方的 `视频来源` 链接为视频页面链接（例如：`https://www.bilibili.com/video/BVxxxxxx/`）。

注意：Bilibili 视频的播放与加载取决于用户的地区和 Bilibili 的反盗链策略，若在你所在地无法正常播放，请改为使用网页链接或嵌入其他来源的视频。

已在页面中显示的视频信息：
- 标题：从视频页抓取并在页面显示（如标题、UP 主名）。
- UP 主及链接：UP 主名称与个人空间链接
- 发布时间：从 Bilibili API 获取的发布时间（UTC）
- 时长：视频时长（秒转成 mm:ss）
- 播放量：视频的观看次数

如果要替换为其他视频，请把 BV ID 告诉我，我会替换并抓取更新后的元数据。若你更希望页面在运行时动态拉取元数据（每次打开页面都向 Bilibili API 请求），我也可以添加相应的 JS。注意：跨域限制（CORS）可能需要服务器代理。

## 站点配色说明（红 / 白 / 黄 / 蓝）
页面已应用高达经典配色（红、白、黄、蓝），主要变量位于 `styles.css` 的 `:root` 区块：

- `--gundam-blue`: 蓝色（用于页眉、标题、链接 hover 等）
- `--gundam-red`: 红色（主要 CTA 按钮与强调色）
- `--gundam-yellow`: 黄色（卡片顶部边线、logo 小点、hover 状态等）
- `--gundam-white`: 白色（页面背景、卡片背景）

如果你要自定义颜色：
1. 编辑 `D:\my website\styles.css` 中 `:root` 的颜色值。
2. 若要把红色设为暗红或浅红，可直接替换 `--gundam-red` 的十六进制值。
3. 若要改动全局阴影或卡片边线，请找到 `.mecha-card`、`.btn`、`.site-header` 的样式块并修改样式。

示例：将红色更改为更深的颜色：
```css
:root { --gundam-red: #b2000f }
```

## 新增功能说明
- 主题切换：页面右上角新增主题切换按钮（🌙 / ☀️），切换浅色/深色主题会将你的选择保存到 localStorage，方便下次打开时保持一致。
- Logo：已将文字 Logo 更换为简洁的 SVG logo（保留高达配色风格），位于 `assets/images/logo.svg`。如需替换图标，上传或替换该文件即可。

### 新 logo 说明
新 logo 为一个简洁的机甲头部造型（Gundam 风格灵感，但为原创设计，以避免版权问题）。如果你想使用更复杂的高达头形象或替换为官方美术，请确保你拥有使用授权并替换 `assets/images/logo.svg` 与 `assets/images/favicon.png`（如果需要）。
如果你有合法授权并想要使用官方高达头部图像：
1. 请把版权明确的文件命名为 `logo-official.svg`（或 `.png`、`.jpg`），并将其放到 `assets/images/`。
2. 我们的页面会自动尝试加载 `assets/images/logo-official.svg`（优先尝试 svg），如果存在则会自动替换当前 logo；如果不存在，则使用默认 `logo.svg`。
3. 若你希望强制替换成 `.png` 或 `.jpg`，请告诉我文件名，我会把 `index.html` 的 img `src` 固定为该文件名。

权限提醒：如果你使用带版权的 logo/图片，请确保你有适当使用许可并在页面底部注明版权与授权信息。

- 卡片 Hover 动画：机体卡片（`.mecha-card`）现在支持悬停时微微上浮、红色高光与阴影，增强视觉层次感。
- 全局平滑过渡：页面元素间的颜色/阴影/背景等现在使用过渡效果，交互更柔和。





如需我为你：
1) 添加英文版本
2) 引入 Live Server 自动预览配置
3) 改为多页并加载更多素材
请回复你要我继续实现的内容。

## Visual Studio Code: Live Server 配置（建议）

为了更方便预览与开发，我已添加 VS Code 的推荐扩展与 Live Server 配置：

- `D:\my website\.vscode/extensions.json`：推荐安装 `ritwickdey.LiveServer` 扩展（右下角点击安装推荐扩展或在扩展面板搜索安装）。
- `D:\my website\.vscode/settings.json`：包含 Live Server 常用设置（端口 5500，使用 127.0.0.1）。

如何使用：
1. 在 PowerShell 中打开项目：
```powershell
cd "D:\my website"
code .
```
2. 在 VS Code 中按 Ctrl+Shift+X，安装或确认已安装 Live Server 扩展。
3. 打开 `index.html`，然后点击右下角的 "Go Live" 按钮，或者按 Ctrl+Shift+P 并搜索 `Live Server: Open with Live Server`。
4. 页面应会在浏览器中打开（默认 http://127.0.0.1:5500/）。如果要更改端口或默认浏览器，可编辑 `.vscode/settings.json` 中的参数。

若你希望我将 Live Server 配置改为指定浏览器或自定义端口，告诉我你要的端口或浏览器路径，我会为你更新配置。