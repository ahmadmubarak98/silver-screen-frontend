import { useEffect, useRef } from "react";

/**
 * @param {string} eventName DOM event name, i.e. 'keydown'
 * @param {function} handler Callback function invoked when event is triggered
 * @param {boolean} active Flag to enable/disable event handler
 * @param {node} element DOM element to attach event handler to, defaults to document
 * @see https://usehooks.com/useEventListener/
 */
export default function useEventListener(
  eventName,
  handler,
  active = true,
  element = document
) {
  // create a ref that stores handler
  const savedHandler = useRef();

  // update ref value if handler changes
  // this allows the effect below to always get latest handler
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // exit early if disabled
    if (!active) return;

    // make sure element supports addEventListener
    const isSupported = typeof element?.addEventListener === "function";
    if (!isSupported) return;

    // create event listener that calls handler function stored in ref
    const eventListener = (event) => savedHandler.current(event);

    // add event listener
    element.addEventListener(eventName, eventListener);

    // remove event listener on cleanup
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element, active]);
}
