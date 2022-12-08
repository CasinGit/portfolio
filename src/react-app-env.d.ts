/// <reference types="react-scripts" />

/**
 * 레이아웃 표현 타입
 * @inclusive 레이아웃 포함
 * @notIncluded 레이아웃이 포함되지 않음
 * @excludeNav 네비게이션 제외
 * @onlyLogo 헤더 로고만 출력
 */
type LayoutType = "inclusive" | "notIncluded" | "excludeNav" | "onlyLogo";