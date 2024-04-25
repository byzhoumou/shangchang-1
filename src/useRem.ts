// src/useRem.js

export const useRem = () => {
  const adjustFontSize = () => {
    const designWidth = 375; // 设计稿宽度
    const designFontSize = 16; // 设计稿根字体大小（px）
    const currentWidth =
      document.documentElement.clientWidth || window.innerWidth;
    const newFontSize = (currentWidth / designWidth) * designFontSize;

    document.documentElement.style.fontSize = `${newFontSize}px`;
  };

  adjustFontSize(); // 初次调用以设置字体大小

  // 监听窗口尺寸变化，调整字体大小
  window.addEventListener("resize", adjustFontSize);

  // 在组件卸载时移除监听器，避免内存泄漏
  onUnmounted(() => {
    window.removeEventListener("resize", adjustFontSize);
  });
};
