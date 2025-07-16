// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Playwright 演示测试', () => {
  test('搜索功能演示 - GitHub', async ({ page }) => {
    // 访问 GitHub
    await page.goto('https://github.com');
    
    // 等待页面加载
    await page.waitForLoadState('networkidle');
    
    // 查找搜索框并输入搜索内容
    await page.fill('[aria-label="Search GitHub"]', 'playwright');
    
    // 按回车键执行搜索
    await page.press('[aria-label="Search GitHub"]', 'Enter');
    
    // 等待搜索结果页面加载
    await page.waitForLoadState('networkidle');
    
    // 验证搜索结果
    await expect(page).toHaveURL(/search/);
    
    // 截图保存搜索结果
    await page.screenshot({ path: 'github-search.png' });
  });

  test('表单填写演示', async ({ page }) => {
    // 访问一个演示表单网站
    await page.goto('https://the-internet.herokuapp.com/login');
    
    // 填写用户名
    await page.fill('#username', 'tomsmith');
    
    // 填写密码
    await page.fill('#password', 'SuperSecretPassword!');
    
    // 点击登录按钮
    await page.click('button[type="submit"]');
    
    // 验证登录成功
    await expect(page.locator('.flash.success')).toContainText('You logged into a secure area!');
    
    // 截图保存登录后的页面
    await page.screenshot({ path: 'login-success.png' });
  });

  test('移动设备模拟', async ({ page }) => {
    // 模拟移动设备
    await page.setViewportSize({ width: 375, height: 667 });
    
    // 访问响应式网站
    await page.goto('https://example.com');
    
    // 截图保存移动端视图
    await page.screenshot({ path: 'mobile-view.png' });
    
    // 验证页面标题
    await expect(page).toHaveTitle(/Example Domain/);
  });
});
