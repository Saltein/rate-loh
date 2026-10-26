import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { AuthPage, TestPage, AdminPage, NotFoundPage } from "../../pages";

import { ProtectedRoute } from "./ProtectedRoute";

export function AppRouter() {
	// Временно для демонстрации роутинга.
	// Позже заменим на данные из AuthContext.
	const isAuthenticated = false;
	const isAdmin = false;

	return (
		<BrowserRouter>
			<Routes>
				{/* Публичные страницы */}
				<Route path="/" element={<Navigate to="/app" replace />} />

				<Route path="/auth" element={<AuthPage />} />

				{/* Страницы авторизованного пользователя */}
				<Route
					element={
						<ProtectedRoute isAuthenticated={isAuthenticated} />
					}
				>
					<Route path="/app" element={<TestPage />} />
				</Route>

				{/* Панель администратора */}
				<Route
					element={
						<ProtectedRoute
							isAuthenticated={isAuthenticated}
							isAdmin={isAdmin}
							requireAdmin
						/>
					}
				>
					<Route path="/admin" element={<AdminPage />} />
				</Route>

				{/* Несуществующий маршрут */}
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}
