import React from "react";
import PropTypes from "prop-types";
import { useSwipeable } from "react-swipeable";  // Import useSwipeable instead of Swipeable
import { cssPrefix } from "../utils/helpers";
import ItemWrapperContainer from "./ItemWrapperContainer";

const Track = ({
  children,
  childWidth,
  autoTabIndexVisibleItems,
  enableSwipe,
  enableMouseSwipe,
  preventDefaultTouchmoveEvent,
  itemsToShow,
  itemsToScroll,
  currentItem,
  itemPosition,
  itemPadding,
  onSwiped,
  onSwiping,
  verticalMode,
  onItemClick
}) => {
  const width = `${childWidth}px`;
  const paddingStyle = `${itemPadding.join("px ")}px`;
  const minVisibleItem = currentItem;
  const maxVisibleItem = currentItem + itemsToShow;
  const prevItem = minVisibleItem - itemsToScroll;
  const nextItem = maxVisibleItem + itemsToScroll;

  const originalChildren = React.Children.map(children, (child, idx) => {
    const isVisible = idx >= minVisibleItem && idx < maxVisibleItem;
    const isPrevItem = !isVisible && idx >= prevItem && idx < currentItem;
    const isNextItem = !isVisible && idx < nextItem && idx > currentItem;
    const itemClass = "carousel-item";

    const childToRender = autoTabIndexVisibleItems
      ? React.cloneElement(child, {
          tabIndex: isVisible ? 0 : -1
        })
      : child;
    return (
      <div
        className={cssPrefix(
          itemClass,
          `${itemClass}-${idx}`,
          `${itemClass}-${isVisible ? "visible" : "hidden"}`,
          isPrevItem && `${itemClass}-prev`,
          isNextItem && `${itemClass}-next`
        )}
      >
        <ItemWrapperContainer
          id={idx}
          itemPosition={itemPosition}
          style={{ width, padding: paddingStyle }}
          key={idx}
          onClick={onItemClick}
        >
          {childToRender}
        </ItemWrapperContainer>
      </div>
    );
  });

  const swipeHandlers = useSwipeable({
    onSwiped,
    onSwiping,
    trackMouse: enableMouseSwipe,
    preventDefaultTouchmoveEvent
  });

  const toRender = enableSwipe ? (
    <div
      {...swipeHandlers}
      style={{
        display: "flex",
        flexDirection: verticalMode ? "column" : "row"
      }}
      className={cssPrefix("swipable")}
    >
      {originalChildren}
    </div>
  ) : (
    originalChildren
  );

  return toRender;
};

Track.propTypes = {
  children: PropTypes.array.isRequired,
  itemsToShow: PropTypes.number.isRequired,
  noAutoTabbedItems: PropTypes.bool,
  currentItem: PropTypes.number.isRequired,
  itemPosition: PropTypes.string,
  itemPadding: PropTypes.array,
  childWidth: PropTypes.number,
  verticalMode: PropTypes.bool,
  enableSwipe: PropTypes.bool,
  enableMouseSwipe: PropTypes.bool,
  preventDefaultTouchmoveEvent: PropTypes.bool,
  onSwiped: PropTypes.func,
  onSwiping: PropTypes.func,
  onItemClick: PropTypes.func
};

export default Track;
