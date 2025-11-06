import type { NextConfig } from "next";

const nextConfig = {
    output: 'export', // ✅ 정적 내보내기
    basePath: '/pdf-viewer', // ✅ GitHub Pages 리포 이름
    assetPrefix: '/pdf-viewer/', // ✅ public 리소스 경로 맞추기
};

export default nextConfig;
