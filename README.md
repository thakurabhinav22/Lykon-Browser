# Lykon Browser


**Lykon Browser** is an independent, privacy-focused web browser built on top of the **Mozilla Gecko engine**.  
It is developed as an indie project with a strong emphasis on **performance**, **security**, and a **clean, modern user experience**.

> Lykon Browser is **not affiliated with or endorsed by Mozilla**.

---

## Repository Overview

This repository contains the **complete source code** of Lykon Browser, including the Gecko engine source code, published in full compliance with the **Mozilla Public License 2.0 (MPL 2.0)**.

All modifications and additions made as part of the Lykon project are also released under MPL 2.0.

---

## License & Legal Notice

This project includes source code from **Mozilla Firefox**, licensed under the **Mozilla Public License 2.0**.

- Mozilla Firefox is a trademark of the Mozilla Foundation.
- Lykon Browser is an independent project and is not associated with Mozilla.

See the following files for details:
- `MPL-2.0.txt`
- `LICENSE`

---

## System Requirements (Windows)

**Minimum Requirements**
- **RAM:** 4 GB (8 GB recommended)
- **Disk Space:** At least 40 GB free
- **Operating System:** Windows 10 or later (fully updated)

**Recommended**
- SSD storage
- 16 GB RAM for faster builds
- Windows 11 with Win32 long paths enabled

---

## Getting Started (Windows)

> ⏱️ First-time setup can take **1–2 hours** due to large downloads and build steps.

---

## Build Instructions

### 1. Install MozillaBuild

MozillaBuild provides all required tools such as **Git, Python, Clang, Make**, and other dependencies needed to build Gecko-based browsers.

Download MozillaBuild from:
https://ftp.mozilla.org/pub/mozilla/labs/mozilla-build/

- Accept the default installation directory.
- If Windows prompts to “reinstall with correct settings”, accept it.

Start the MozillaBuild shell:
```bat
C:\mozilla-build\start-shell.bat
```
⚠️ Always use the MozillaBuild shell when working with Lykon / Gecko.

**2. Clone the Lykon Browser repository**
This step downloads and configures all required dependencies.

```bat
  cd c:/
  git clone https://github.com/thakurabhinav22/Lykon-Browser.git
  cd Lykon-Browser
```
**3. Build Lykon Browser**
```bat
  ./mach build
```
The first build may take 15–30 minutes, depending on your system.
On success, you will see:
**Your build was successful!**

**4.Run Lykon Browser**
```bat
  ./mach run
```
Learn More 
https://firefox-source-docs.mozilla.org/setup/windows_build.html


🎉 You are now running your locally built Lykon Browser.


***Happpy Hacking***
