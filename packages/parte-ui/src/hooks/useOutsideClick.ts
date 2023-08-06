import React, { useEffect } from "react";

export default function useOutsideClick(
  refs: React.RefObject<HTMLElement>[],
  onOutsideClicked: () => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const targetMatched = refs.some((ref) => {
        return (
          !!ref.current &&
          event.target &&
          ref.current.contains(event.target as Element)
        );
      });

      // 동일한게 하나도 없으면 outside 클릭이다
      if (!targetMatched) onOutsideClicked();
    };

    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [onOutsideClicked]);
}
