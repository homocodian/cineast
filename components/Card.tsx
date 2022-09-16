import React, { ReactNode } from "react";

interface IProps {
  header?: ReactNode;
  title?: ReactNode;
  body?: ReactNode;
}

function Card({ header, title, body }: IProps) {
  return (
    <div className="w-[21rem] rounded-xl bg-white px-4 py-3 shadow last:mr-4">
      {header && <div className="py-2">{header}</div>}
      {title && <div className="py-2">{title}</div>}
      {body && <div className="pt-2">{body}</div>}
    </div>
  );
}

export default Card;
