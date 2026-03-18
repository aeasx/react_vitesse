import type { ComponentType } from "react";
import { Link } from "react-router";

interface IWithAuthProps {
  user: { name: string; role: string; };
}

/**
 * @description 高阶组件，返回一个增强后的新组件，用于逻辑复用
 * @param Component 要增强的组件
 * @returns 增强后的组件
 */
function withAuth<P extends IWithAuthProps>(WrapperComponent: ComponentType<P>) {
  return function AuthGuard(props: P) {
    if (!props.user) {
      return <Link to="/login">请先登录</Link>;
    }
    return <WrapperComponent {...props} />;
  };
}

export function Dashboard({ user }: IWithAuthProps) {
  return (
    <div>
      {/* 展示当前登录用户信息，便于验证高阶组件鉴权后的渲染结果 */}
      <h2>Dashboard</h2>
      <p>欢迎回来，{user.name}</p>
      <p>当前角色：{user.role}</p>
    </div>
  );
}

export const ProtectedDashboard = withAuth(Dashboard);