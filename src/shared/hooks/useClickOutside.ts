import { RefObject, useEffect } from "react";

type Props<T> = {
  ref: RefObject<T | null>;
  handleClick: VoidFunction;
  checkCoordinates?: boolean;
};

export function useClickOutside<T extends HTMLElement>({
  ref,
  handleClick,
  checkCoordinates = false,
}: Props<T>) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!ref?.current) return;

      const isOutside = checkCoordinates
        ? isClickOutsideByCoordinates(ref.current, event)
        : !ref.current.contains(event.target as Node);

      if (isOutside) {
        handleClick();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handleClick, checkCoordinates]);
}

function isClickOutsideByCoordinates(element: HTMLElement, event: MouseEvent) {
  const rect = element.getBoundingClientRect();
  return (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  );
}
