// @ts-check
import { test, expect } from '@playwright/test';

test.describe('React App Tests', () => {
  test('should display the React app homepage', async ({ page }) => {
    // 访问你的 React 应用
    await page.goto('http://localhost:3000');
    
    // 检查页面标题
    await expect(page).toHaveTitle(/React App/);
    
    // 检查 React logo 是否存在
    await expect(page.locator('.App-logo')).toBeVisible();
    
    // 检查欢迎文本
    await expect(page.locator('text=Edit src/App.js and save to reload.')).toBeVisible();
    
    // 检查 Learn React 链接
    await expect(page.locator('text=Learn React')).toBeVisible();
  });

  test('should have functional Learn React link', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // 点击 Learn React 链接
    const learnReactLink = page.locator('text=Learn React');
    await expect(learnReactLink).toHaveAttribute('href', 'https://reactjs.org');
    await expect(learnReactLink).toHaveAttribute('target', '_blank');
  });

  test('should take a screenshot', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // 等待页面完全加载
    await page.waitForLoadState('networkidle');
    
    // 截图保存
    await page.screenshot({ path: 'react-app-screenshot.png', fullPage: true });
  });
});
