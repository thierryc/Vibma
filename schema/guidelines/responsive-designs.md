# Responsive Sizing

## Workflow: Top-Down Sizing

Build layouts from the outside in:

1. **Set the container first.** Every container needs an explicit width — either `width` + `layoutSizingHorizontal:"FIXED"` or `layoutSizingHorizontal:"FILL"` inside an auto-layout parent. Set `layoutMode` (VERTICAL or HORIZONTAL) and spacing/padding.
2. **Children fill the container.** Use `layoutSizingHorizontal:"FILL"` on children so they stretch to the available space. Use `layoutSizingVertical:"HUG"` so height follows content.
3. **Only leaves use HUG on both axes.** Buttons, badges, icons — elements with short, predictable content that should shrink-wrap.

This ensures every level of the tree has a clear width constraint. Text wraps, FILL children stretch, and the layout adapts when the container resizes.

Always set BOTH axes explicitly on every node. Omitting sizing leads to unintended defaults.

## FIXED / FILL / HUG

- **FIXED** — layout boundaries: page shell, sidebar width, modal max-width
- **FILL** — children that adapt to parent: main content area, nav stacks, cards in columns, text that should wrap
- **HUG** — content-sized leaves only: icons, badges, pills, button labels

## Anti-patterns: HUG/HUG

HUG on both axes is the most common cause of broken layouts. It means "shrink to fit my content on both axes" — the container has no opinion about its own size and collapses to whatever its children measure.

**Why HUG/HUG breaks designs:**

1. **Text never wraps.** A HUG-width container grows to fit the longest text line. Body text becomes a single very long line instead of wrapping at a readable width. The design looks correct with short placeholder text but breaks with real content.

2. **Layouts don't adapt.** HUG/HUG containers ignore their parent's width. A card inside a responsive column won't stretch to fill available space — it stays at its content width, leaving gaps or overflowing.

3. **FILL children collapse.** If a child has `layoutSizingHorizontal:"FILL"` inside a HUG-width parent, it collapses to zero — FILL means "take remaining space" but HUG means "there is no remaining space."

4. **Cascading failures.** One HUG/HUG container at the top of a tree forces every child to resolve its own width. The entire layout becomes rigid and content-dependent instead of responsive.

**HUG/HUG is only correct for:**
- Buttons, pills, badges, chips — intrinsically-sized leaf elements with short, predictable content
- Icon containers with fixed-size children
- Inline tags and status indicators

**For everything else, set at least one axis to FIXED or FILL:**
- Cards, panels, list rows → `width` + `layoutSizingHorizontal:"FIXED"`, vertical `HUG`
- Containers inside auto-layout → `layoutSizingHorizontal:"FILL"`, vertical `HUG`
- Full-width sections → `layoutSizingHorizontal:"FILL"`, `layoutSizingVertical:"HUG"`

## Component Sizing

Component roots use `FILL` when placed in a parent — they adapt to context, not a fixed specimen width.

Example sidebar item:
- Instance: `FILL` in parent nav stack
- Icon child: fixed 18x18
- Label child: `FILL`
- Badge child: `HUG`

## Text Sizing

- Body text inside containers: `FILL` width, `HUG` height (auto-wraps)
- Single-line labels: `FILL` horizontal (truncates if needed)
- Standalone headings: `HUG` is fine

Inside auto-layout parents, text defaults to `FILL` horizontal + `HUG` vertical + `textAutoResize: HEIGHT`.

## Checklist

Before finalizing a layout, verify:
1. No container with text has HUG on the horizontal axis (unless it's a button/badge)
2. Children inside auto-layout parents use FILL on the cross-axis (not FIXED or HUG)
3. Top-level containers have an explicit width (FIXED) or stretch to their parent (FILL)
4. Run `audit(rules:["composition"])` to catch overflow-parent, unbounded-hug, and fixed-in-autolayout issues
