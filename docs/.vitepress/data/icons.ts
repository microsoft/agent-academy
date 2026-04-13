// Safe to use v-html with these values — all content is hardcoded in this file,
// not derived from user input or external sources.
// Official SVG paths sourced from simple-icons (simpleicons.org) where available.

export const productIcons: Record<string, string> = {
  // simple-icons: microsoftazure
  "azure":
    `<path fill="currentColor" d="M22.379 23.343a1.62 1.62 0 0 0 1.536-2.14v.002L17.35 1.76A1.62 1.62 0 0 0 15.816.657H8.184A1.62 1.62 0 0 0 6.65 1.76L.086 21.204a1.62 1.62 0 0 0 1.536 2.139h4.741a1.62 1.62 0 0 0 1.535-1.103l.977-2.892 4.947 3.675c.28.208.618.32.966.32m-3.084-12.531 3.624 10.739a.54.54 0 0 1-.51.713v-.001h-.03a.54.54 0 0 1-.322-.106l-9.287-6.9h4.853m6.313 7.006c.116-.326.13-.694.007-1.058L9.79 1.76a1.722 1.722 0 0 0-.007-.02h6.034a.54.54 0 0 1 .512.366l6.562 19.445a.54.54 0 0 1-.338.684"/>`,

  // Copilot Studio — no official icon; uses sparkle+bot combination
  "copilot-studio":
    `<path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
     <path fill="currentColor" d="M19 3l-1.5 3L14 7.5l3.5 1.5L19 12l1.5-3.5L24 7l-3.5-1.5z" opacity=".7"/>`,

  // simple-icons: dataverse
  "dataverse":
    `<path fill="currentColor" d="M16.327 4.568a3.895 3.895 0 0 1 6.671.82h.001c1.996 4.686.925 10.086-2.487 13.154-3.772 3.39-8.875 3.408-12.178.796a.54.54 0 0 0 .05-.072l1.697-2.939c1.596.819 3.11 1.04 4.439.739 1.472-.333 2.734-1.304 3.64-2.872 1.708-2.96 1.161-6.961-1.777-9.583a.396.396 0 0 0-.056-.043ZM7.673 19.432a3.895 3.895 0 0 1-6.661-.798H1.01C-.999 13.944.071 8.53 3.488 5.458c3.772-3.391 8.876-3.408 12.18-.795a.51.51 0 0 0-.051.071l-1.697 2.94c-1.595-.82-3.109-1.04-4.439-.739-1.472.333-2.734 1.304-3.639 2.872-1.709 2.959-1.162 6.961 1.776 9.582.018.016.036.03.055.043Zm1.969-3.345a4.72 4.72 0 0 1 1.612-8.746c-2.064-.234-3.829.723-4.979 2.716-1.598 2.767-1.072 6.507 1.676 8.959l1.691-2.929Zm4.718-8.174h.001a4.72 4.72 0 0 1 1.727 6.447 4.712 4.712 0 0 1-3.34 2.3c2.064.233 3.828-.724 4.979-2.716 1.598-2.768 1.071-6.508-1.676-8.96L14.36 7.913Zm-4.468 7.741a4.219 4.219 0 0 1 4.217-7.308h.002a4.22 4.22 0 0 1-4.188 7.326l-.031-.018Z"/>`,

  // simple-icons: githubcopilot
  "github-copilot":
    `<path fill="currentColor" d="M23.922 16.997C23.061 18.492 18.063 22.02 12 22.02 5.937 22.02.939 18.492.078 16.997A.641.641 0 0 1 0 16.741v-2.869a.883.883 0 0 1 .053-.22c.372-.935 1.347-2.292 2.605-2.656.167-.429.414-1.055.644-1.517a10.098 10.098 0 0 1-.052-1.086c0-1.331.282-2.499 1.132-3.368.397-.406.89-.717 1.474-.952C7.255 2.937 9.248 1.98 11.978 1.98c2.731 0 4.767.957 6.166 2.093.584.235 1.077.546 1.474.952.85.869 1.132 2.037 1.132 3.368 0 .368-.014.733-.052 1.086.23.462.477 1.088.644 1.517 1.258.364 2.233 1.721 2.605 2.656a.841.841 0 0 1 .053.22v2.869a.641.641 0 0 1-.078.256Zm-11.75-5.992h-.344a4.359 4.359 0 0 1-.355.508c-.77.947-1.918 1.492-3.508 1.492-1.725 0-2.989-.359-3.782-1.259a2.137 2.137 0 0 1-.085-.104L4 11.746v6.585c1.435.779 4.514 2.179 8 2.179 3.486 0 6.565-1.4 8-2.179v-6.585l-.098-.104s-.033.045-.085.104c-.793.9-2.057 1.259-3.782 1.259-1.59 0-2.738-.545-3.508-1.492a4.359 4.359 0 0 1-.355-.508Zm2.328 3.25c.549 0 1 .451 1 1v2c0 .549-.451 1-1 1-.549 0-1-.451-1-1v-2c0-.549.451-1 1-1Zm-5 0c.549 0 1 .451 1 1v2c0 .549-.451 1-1 1-.549 0-1-.451-1-1v-2c0-.549.451-1 1-1Zm3.313-6.185c.136 1.057.403 1.913.878 2.497.442.544 1.134.938 2.344.938 1.573 0 2.292-.337 2.657-.751.384-.435.558-1.15.558-2.361 0-1.14-.243-1.847-.705-2.319-.477-.488-1.319-.862-2.824-1.025-1.487-.161-2.192.138-2.533.529-.269.307-.437.808-.438 1.578v.021c0 .265.021.562.063.893Zm-1.626 0c.042-.331.063-.628.063-.894v-.02c-.001-.77-.169-1.271-.438-1.578-.341-.391-1.046-.69-2.533-.529-1.505.163-2.347.537-2.824 1.025-.462.472-.705 1.179-.705 2.319 0 1.211.175 1.926.558 2.361.365.414 1.084.751 2.657.751 1.21 0 1.902-.394 2.344-.938.475-.584.742-1.44.878-2.497Z"/>`,

  // Microsoft 365 — use Microsoft Office icon (closest official equivalent)
  "microsoft-365":
    `<path fill="currentColor" d="M21.53 4.306v15.363q0 .807-.472 1.433-.472.627-1.253.85l-6.888 1.974q-.136.037-.29.055-.156.019-.293.019-.396 0-.72-.105-.321-.106-.656-.292l-4.505-2.544q-.248-.137-.391-.366-.143-.23-.143-.515 0-.434.304-.738.304-.305.739-.305h5.831V4.964l-4.38 1.563q-.533.187-.856.658-.322.472-.322 1.03v8.078q0 .496-.248.912-.25.416-.683.651l-2.072 1.13q-.286.148-.571.148-.497 0-.844-.347-.348-.347-.348-.844V6.563q0-.62.33-1.19.328-.571.874-.881L11.07.285q.248-.136.534-.21.285-.075.57-.075.211 0 .38.031.166.031.364.093l6.888 1.899q.384.11.7.329.317.217.547.52.23.305.353.67.125.367.125.764zm-1.588 15.363V4.306q0-.273-.16-.478-.163-.204-.423-.28l-3.388-.93q-.397-.111-.794-.23-.397-.117-.794-.216v19.68l4.976-1.427q.26-.074.422-.28.161-.204.161-.477z"/>`,

  // Microsoft 365 Copilot — M365 Office icon + sparkle
  "microsoft-365-copilot":
    `<path fill="currentColor" d="M21.53 4.306v15.363q0 .807-.472 1.433-.472.627-1.253.85l-6.888 1.974q-.136.037-.29.055-.156.019-.293.019-.396 0-.72-.105-.321-.106-.656-.292l-4.505-2.544q-.248-.137-.391-.366-.143-.23-.143-.515 0-.434.304-.738.304-.305.739-.305h5.831V4.964l-4.38 1.563q-.533.187-.856.658-.322.472-.322 1.03v8.078q0 .496-.248.912-.25.416-.683.651l-2.072 1.13q-.286.148-.571.148-.497 0-.844-.347-.348-.347-.348-.844V6.563q0-.62.33-1.19.328-.571.874-.881L11.07.285q.248-.136.534-.21.285-.075.57-.075.211 0 .38.031.166.031.364.093l6.888 1.899q.384.11.7.329.317.217.547.52.23.305.353.67.125.367.125.764zm-1.588 15.363V4.306q0-.273-.16-.478-.163-.204-.423-.28l-3.388-.93q-.397-.111-.794-.23-.397-.117-.794-.216v19.68l4.976-1.427q.26-.074.422-.28.161-.204.161-.477z"/>
     <path fill="currentColor" d="M20 1l1 2.5L23.5 4.5 21 5.5 20 8l-1-2.5L16.5 4.5 19 3.5z"/>`,

  // Microsoft Learn — no official icon; book/graduation mark
  "microsoft-learn":
    `<path fill="currentColor" d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>`,

  // simple-icons: microsoftoutlook
  "outlook":
    `<path fill="currentColor" d="M7.88 12.04q0 .45-.11.87-.1.41-.33.74-.22.33-.58.52-.37.2-.87.2t-.85-.2q-.35-.21-.57-.55-.22-.33-.33-.75-.1-.42-.1-.86t.1-.87q.1-.43.34-.76.22-.34.59-.54.36-.2.87-.2t.86.2q.35.21.57.55.22.34.31.77.1.43.1.88zM24 12v9.38q0 .46-.33.8-.33.32-.8.32H7.13q-.46 0-.8-.33-.32-.33-.32-.8V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h6.5V2.55q0-.44.3-.75.3-.3.75-.3h12.9q.44 0 .75.3.3.3.3.75V10.85l1.24.72h.01q.1.07.18.18.07.12.07.25zm-6-8.25v3h3v-3zm0 4.5v3h3v-3zm0 4.5v1.83l3.05-1.83zm-5.25-9v3h3.75v-3zm0 4.5v3h3.75v-3zm0 4.5v2.03l2.41 1.5 1.34-.8v-2.73zM9 3.75V6h2l.13.01.12.04v-2.3zM5.98 15.98q.9 0 1.6-.3.7-.32 1.19-.86.48-.55.73-1.28.25-.74.25-1.61 0-.83-.25-1.55-.24-.71-.71-1.24t-1.15-.83q-.68-.3-1.55-.3-.92 0-1.64.3-.71.3-1.2.85-.5.54-.75 1.3-.25.74-.25 1.63 0 .85.26 1.56.26.72.74 1.23.48.52 1.17.81.69.3 1.56.3zM7.5 21h12.39L12 16.08V17q0 .41-.3.7-.29.3-.7.3H7.5zm15-.13v-7.24l-5.9 3.54Z"/>`,

  // simple-icons: powerautomate
  "power-automate":
    `<path fill="currentColor" d="m20.079 7.235 3.666 4.097c.34.38.34.956 0 1.336l-7.63 8.528c-.19.213-.462.334-.748.334H7.289l12.79-14.295ZM6.789 21.53H1.005c-.867 0-1.326-1.025-.748-1.671L15.748 2.545c.139.057.265.145.367.259l3.631 4.058a.478.478 0 0 0-.039.039L6.916 21.197a.497.497 0 0 0-.127.333Zm8.356-19.06-8.192 9.155L.257 4.141c-.578-.646-.119-1.671.748-1.671h14.14Z"/>`,

  // Power Platform — use Power Apps icon as closest official equivalent
  "power-platform":
    `<path fill="currentColor" d="M19.012 18.027L14.261 23.21C14.072 23.417 13.803 23.535 13.523 23.535c-.281 0-.549-.118-.739-.325L8.636 18.685c-.35-.381-.35-.973 0-1.353l4.266-4.655c.349-.381.349-.973 0-1.354L8.636 6.668c-.35-.38-.35-.972 0-1.353L12.784.79C12.974.583 13.242.465 13.523.465c.28 0 .549.118.738.325l4.751 5.183c-.414.004-.809.18-1.088.486l-3.84 4.188c-.697.762-.697 1.944 0 2.706l3.84 4.188c.293.32.69.482 1.088.486zM11.399 22.438l-.627.716c-.19.218-.465.342-.754.342-.289 0-.563-.124-.753-.342L.371 12.989c-.495-.563-.495-1.415 0-1.978L9.265.846C9.455.628 9.73.504 10.018.504c.289 0 .563.124.754.342l.627.716L8.268 4.978c-.525.57-.525 1.458 0 2.028l4.266 4.655c.174.191.174.487 0 .678L8.268 16.994c-.525.57-.525 1.458 0 2.028l3.131 3.416zm8.357-5.222c-.189.198-.452.311-.726.311-.281 0-.548-.118-.738-.324L14.453 13.015c-.523-.571-.523-1.459 0-2.03l3.839-4.188c.19-.206.457-.324.738-.324.274 0 .537.113.726.311l3.85 4.201c.525.571.525 1.459 0 2.03l-3.85 4.201z"/>`,

  // simple-icons: microsoftsharepoint
  "sharepoint":
    `<path fill="currentColor" d="M24 13.5q0 1.242-.475 2.332-.474 1.09-1.289 1.904-.814.815-1.904 1.29-1.09.474-2.332.474-.762 0-1.523-.2-.106.997-.557 1.858-.451.862-1.154 1.494-.704.633-1.606.99-.902.358-1.91.358-1.09 0-2.045-.416-.955-.416-1.664-1.125-.709-.709-1.125-1.664Q6 19.84 6 18.75q0-.188.018-.375.017-.188.04-.375H.997q-.41 0-.703-.293T0 17.004V6.996q0-.41.293-.703T.996 6h3.54q.14-1.277.726-2.373.586-1.096 1.488-1.904Q7.652.914 8.807.457 9.96 0 11.25 0q1.395 0 2.625.533T16.02 1.98q.914.915 1.447 2.145T18 6.75q0 .188-.012.375-.011.188-.035.375 1.242 0 2.344.469 1.101.468 1.928 1.277.826.809 1.3 1.904Q24 12.246 24 13.5zm-12.75-12q-.973 0-1.857.34-.885.34-1.577.943-.691.604-1.154 1.43Q6.2 5.039 6.06 6h4.945q.41 0 .703.293t.293.703v4.945l.21-.035q.212-.75.61-1.424.399-.673.944-1.218.545-.545 1.213-.944.668-.398 1.43-.61.093-.503.093-.96 0-1.09-.416-2.045-.416-.955-1.125-1.664-.709-.709-1.664-1.125Q12.34 1.5 11.25 1.5zM6.117 15.902q.54 0 1.06-.111.522-.111.932-.37.41-.257.662-.679.252-.422.252-1.055 0-.632-.263-1.054-.264-.422-.662-.703-.399-.282-.856-.463l-.855-.34q-.399-.158-.662-.334-.264-.176-.264-.445 0-.2.14-.323.141-.123.335-.193.193-.07.404-.094.21-.023.351-.023.598 0 1.055.152.457.153.95.457V8.543q-.282-.082-.522-.14-.24-.06-.475-.1-.234-.041-.486-.059-.252-.017-.557-.017-.515 0-1.054.117-.54.117-.979.375-.44.258-.715.68-.275.421-.275 1.03 0 .598.263.997.264.398.663.68.398.28.855.474l.856.363q.398.17.662.358.263.187.263.457 0 .222-.123.351-.123.13-.31.2-.188.07-.393.087-.205.018-.369.018-.703 0-1.248-.234-.545-.235-1.107-.621v1.875q1.195.468 2.472.468zM11.25 22.5q.773 0 1.453-.293t1.19-.803q.51-.51.808-1.195.299-.686.299-1.459 0-.668-.223-1.277-.222-.61-.62-1.096-.4-.486-.95-.826-.55-.34-1.207-.48v1.933q0 .41-.293.703t-.703.293H7.57q-.07.375-.07.75 0 .773.293 1.459t.803 1.195q.51.51 1.195.803.686.293 1.459.293zM18 18q.926 0 1.746-.352.82-.351 1.436-.966.615-.616.966-1.43.352-.815.352-1.752 0-.926-.352-1.746-.351-.82-.966-1.436-.616-.615-1.436-.966Q18.926 9 18 9t-1.74.357q-.815.358-1.43.973t-.973 1.43q-.357.814-.357 1.74 0 .129.006.258t.017.258q.551.27 1.02.65t.838.855q.369.475.627 1.026.258.55.387 1.148Q17.18 18 18 18Z"/>`,

  // simple-icons: microsoftteams
  "teams":
    `<path fill="currentColor" d="M20.625 8.127q-.55 0-1.025-.205-.475-.205-.832-.563-.358-.357-.563-.832Q18 6.053 18 5.502q0-.54.205-1.02t.563-.837q.357-.358.832-.563.474-.205 1.025-.205.54 0 1.02.205t.837.563q.358.357.563.837.205.48.205 1.02 0 .55-.205 1.025-.205.475-.563.832-.357.358-.837.563-.48.205-1.02.205zm0-3.75q-.469 0-.797.328-.328.328-.328.797 0 .469.328.797.328.328.797.328.469 0 .797-.328.328-.328.328-.797 0-.469-.328-.797-.328-.328-.797-.328zM24 10.002v5.578q0 .774-.293 1.46-.293.685-.803 1.194-.51.51-1.195.803-.686.293-1.459.293-.445 0-.908-.105-.463-.106-.85-.329-.293.95-.855 1.729-.563.78-1.319 1.336-.756.557-1.67.861-.914.305-1.898.305-1.148 0-2.162-.398-1.014-.399-1.805-1.102-.79-.703-1.312-1.664t-.674-2.086h-5.8q-.411 0-.704-.293T0 16.881V6.873q0-.41.293-.703t.703-.293h8.59q-.34-.715-.34-1.5 0-.727.275-1.365.276-.639.75-1.114.475-.474 1.114-.75.638-.275 1.365-.275t1.365.275q.639.276 1.114.75.474.475.75 1.114.275.638.275 1.365t-.275 1.365q-.276.639-.75 1.113-.475.475-1.114.75-.638.276-1.365.276-.188 0-.375-.024-.188-.023-.375-.058v1.078h10.875q.469 0 .797.328.328.328.328.797zM12.75 2.373q-.41 0-.78.158-.368.158-.638.434-.27.275-.428.639-.158.363-.158.773 0 .41.158.78.159.368.428.638.27.27.639.428.369.158.779.158.41 0 .773-.158.364-.159.64-.428.274-.27.433-.639.158-.369.158-.779 0-.41-.158-.773-.159-.364-.434-.64-.275-.275-.639-.433-.363-.158-.773-.158zM6.937 9.814h2.25V7.94H2.814v1.875h2.25v6h1.875zm10.313 7.313v-6.75H12v6.504q0 .41-.293.703t-.703.293H8.309q.152.809.556 1.5.405.691.985 1.19.58.497 1.318.779.738.281 1.582.281.926 0 1.746-.352.82-.351 1.436-.966.615-.616.966-1.43.352-.815.352-1.752zm5.25-1.547v-5.203h-3.75v6.855q.305.305.691.452.387.146.809.146.469 0 .879-.176.41-.175.715-.48.304-.305.48-.715t.176-.879Z"/>`,

  // simple-icons: visualstudiocode
  "visual-studio-code":
    `<path fill="currentColor" d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>`,
};

export const tagIcons: Record<string, string> = {
  "adaptive-cards":
    `<rect x="2" y="4" width="16" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/>
     <path fill="currentColor" d="M5 8h6v1.5H5zm0 3h10v1.5H5z" opacity=".7"/>
     <rect x="5" y="7" width="4" height="4" rx="1" fill="currentColor" opacity=".3"/>`,

  "ai-safety":
    `<path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"
       d="M10 2l7 3v5c0 4-3 7-7 8C6 17 3 14 3 10V5l7-3z"/>
     <path fill="currentColor" d="M8.5 10.5l-2-2 1-1 1 1 3-3 1 1-4 4z"/>`,

  "automation":
    `<circle cx="10" cy="10" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/>
     <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
       d="M10 3v2M10 15v2M3 10h2M15 10h2M5.1 5.1l1.4 1.4M13.5 13.5l1.4 1.4M5.1 14.9l1.4-1.4M13.5 6.5l1.4-1.4"/>`,

  "compliance":
    `<path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"
       d="M10 2l7 3v5c0 4-3 7-7 8C6 17 3 14 3 10V5l7-3z"/>
     <path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
       d="M7 10l2 2 4-4"/>`,

  "completion":
    `<circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
     <path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
       d="M6.5 10.5l2.5 2.5 5-5"/>`,

  "custom-skills":
    `<path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
       d="M13 2l2 2-9 9H4v-2l9-9zM12 3l3 3"/>
     <path fill="currentColor" d="M3 15h14v1.5H3z" opacity=".5"/>`,

  "declarative-agents":
    `<rect x="3" y="3" width="14" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/>
     <path fill="currentColor" d="M6 7h8v1.5H6zm0 3h5v1.5H6z" opacity=".7"/>
     <path fill="currentColor" d="M8 17l-2-3h8l-2 3H8z"/>`,

  "document-generation":
    `<path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"
       d="M5 2h7l4 4v13H4V2h1z"/>
     <path fill="none" stroke="currentColor" stroke-width="1.5" d="M12 2v4h4"/>
     <path fill="currentColor" d="M6 9h8v1.5H6zm0 3h6v1.5H6z" opacity=".7"/>`,

  "feedback":
    `<path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"
       d="M3 3h14v11H3z"/>
     <path fill="currentColor" d="M7 19l3-5h4l-7 5z"/>
     <path fill="currentColor" d="M6 7h8v1.5H6zm0 3h5v1.5H6z" opacity=".7"/>`,

  "finance":
    `<circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
     <text x="10" y="14" text-anchor="middle" font-size="10" font-weight="700" fill="currentColor" font-family="sans-serif">$</text>`,

  "fundamentals":
    `<path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
       d="M10 2L2 7v11h16V7L10 2z"/>
     <rect x="7" y="11" width="6" height="7" fill="currentColor" opacity=".4"/>`,

  "grounding":
    `<circle cx="10" cy="8" r="5" fill="none" stroke="currentColor" stroke-width="1.5"/>
     <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
       d="M10 13v5M6 18h8"/>`,

  "instructions":
    `<path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"
       d="M4 2h12v16H4z"/>
     <path fill="currentColor" d="M6 6h8v1.5H6zm0 3h8v1.5H6zm0 3h5v1.5H6z" opacity=".7"/>`,

  "licensing":
    `<rect x="3" y="4" width="14" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/>
     <path fill="none" stroke="currentColor" stroke-width="1.5" d="M3 8h14"/>
     <circle cx="10" cy="12" r="1.5" fill="currentColor" opacity=".6"/>`,

  "mcp":
    `<rect x="6" y="2" width="8" height="4" rx="1" fill="currentColor" opacity=".7"/>
     <path fill="currentColor" d="M9 6h2v4H9z"/>
     <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
       d="M5 10H3v4h2M15 10h2v4h-2"/>
     <rect x="5" y="10" width="10" height="8" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/>`,

  "models":
    `<circle cx="10" cy="10" r="3" fill="currentColor"/>
     <circle cx="4" cy="6" r="2" fill="currentColor" opacity=".5"/>
     <circle cx="16" cy="6" r="2" fill="currentColor" opacity=".5"/>
     <circle cx="4" cy="14" r="2" fill="currentColor" opacity=".5"/>
     <circle cx="16" cy="14" r="2" fill="currentColor" opacity=".5"/>
     <path fill="none" stroke="currentColor" stroke-width="1" opacity=".4"
       d="M6 7.2l2.5 1.8M13.5 7.2L11 9M6 12.8l2.5-1.8M13.5 12.8L11 11"/>`,

  "multi-agent":
    `<circle cx="10" cy="5" r="2.5" fill="currentColor"/>
     <circle cx="4.5" cy="14" r="2.5" fill="currentColor" opacity=".7"/>
     <circle cx="15.5" cy="14" r="2.5" fill="currentColor" opacity=".7"/>
     <path fill="none" stroke="currentColor" stroke-width="1.5" d="M10 7.5v3l-4 2M10 10.5l4 2"/>`,

  "multimodal":
    `<rect x="2" y="3" width="10" height="8" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.5"/>
     <path fill="currentColor" d="M4 6h6v1.5H4z" opacity=".5"/>
     <path fill="none" stroke="currentColor" stroke-width="1.5" d="M8 11v3M14 7v8"/>
     <circle cx="14" cy="5" r="2" fill="currentColor" opacity=".7"/>
     <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M12 17h4"/>`,

  "prebuilt-agents":
    `<rect x="3" y="5" width="14" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/>
     <circle cx="7.5" cy="9" r="1.2" fill="currentColor"/>
     <circle cx="12.5" cy="9" r="1.2" fill="currentColor"/>
     <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M7 12.5c.8 1 2.5 1 3 0"/>
     <path fill="currentColor" d="M7 3h2v3H7zM11 3h2v3h-2z" opacity=".7"/>`,

  "prompting":
    `<path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
       d="M3 5h14M3 9h10M3 13h7"/>
     <path fill="currentColor" d="M15 11l4 3-4 3v-6z"/>`,

  "publishing":
    `<path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
       d="M10 3v10M6 7l4-4 4 4"/>
     <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M3 15v2h14v-2"/>`,

  "setup":
    `<circle cx="10" cy="10" r="2.5" fill="none" stroke="currentColor" stroke-width="1.5"/>
     <path fill="none" stroke="currentColor" stroke-width="1.5"
       d="M10 2v2M10 16v2M2 10h2M16 10h2M4.2 4.2l1.5 1.5M14.3 14.3l1.5 1.5M4.2 15.8l1.5-1.5M14.3 5.7l1.5-1.5"/>`,

  "solutions":
    `<path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"
       d="M5 3h10l2 4-7 10L3 7l2-4z"/>
     <path fill="none" stroke="currentColor" stroke-width="1" d="M3 7h14M10 17V7"/>`,

  "topics":
    `<path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"
       d="M3 3h14v10H3z"/>
     <path fill="currentColor" d="M8 19l-2-6h8l-2 6H8z"/>
     <path fill="currentColor" d="M6 7h8v1.5H6z" opacity=".7"/>`,

  "triggers":
    `<path fill="currentColor" d="M11 2L5 11h5l-1 7 6-9h-5l1-7z"/>`,

  "yaml":
    `<path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
       d="M4 4h3l3 5 3-5h3M10 9v7M6 17h8"/>`,
};

export const industryIcons: Record<string, string> = {
  "facilities":
    `<path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"
       d="M3 18V8l7-5 7 5v10H3z"/>
     <rect x="7" y="11" width="6" height="7" fill="currentColor" opacity=".4"/>
     <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M10 14v4"/>`,

  "financial-services":
    `<circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
     <text x="10" y="14" text-anchor="middle" font-size="10" font-weight="700" fill="currentColor" font-family="sans-serif">$</text>`,

  "general":
    `<circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
     <circle cx="10" cy="10" r="3" fill="currentColor" opacity=".5"/>`,

  "hr":
    `<circle cx="10" cy="5" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/>
     <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M4 18c0-3.3 2.7-6 6-6s6 2.7 6 6"/>`,

  "it":
    `<rect x="2" y="4" width="16" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/>
     <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M7 19h6"/>
     <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M10 16v3"/>
     <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M7 9l2 2-2 2M11 13h3"/>`,

  "security":
    `<path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"
       d="M10 2l7 3v5c0 4-3 7-7 8C6 17 3 14 3 10V5l7-3z"/>
     <path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
       d="M7 10l2 2 4-4"/>`,
};

// Merged icon registry for components that need a single lookup (e.g. DownloadFiles).
// Each entry carries its SVG inner content and the correct viewBox.
export const allIcons: Record<string, { svg: string; viewBox: string }> =
  Object.fromEntries([
    ...Object.entries(productIcons).map(([k, v]) => [k, { svg: v, viewBox: "0 0 24 24" }]),
    ...Object.entries(tagIcons).map(([k, v]) => [k, { svg: v, viewBox: "0 0 20 20" }]),
    ...Object.entries(industryIcons).map(([k, v]) => [k, { svg: v, viewBox: "0 0 20 20" }]),
  ]);
