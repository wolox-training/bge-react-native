export interface NavigationProps {
  navigation: { navigate(route: string): void; goBack(): void };
}
