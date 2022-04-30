import "./CyberContainer.css";

export function CyberContainer({
  children,
}: {
  children: JSX.Element | JSX.Element[] | string | string[];
}) {
  return (
    <div className="cyber-container" data-augmented-ui="tl-clip-x tr-clip-inset br-clip-x bl-clip-inset both">
      {children}
    </div>
  );
}

export function CyberContainerCard({
    children,
  }: {
    children: JSX.Element | JSX.Element[] | string | string[];
  }) {
    return (
      <div className="cyber-container-card" data-augmented-ui="tl-2-clip-x tr-2-clip-x br-2-clip-x bl-2-clip-x both">
        {children}
      </div>
    );
  }
