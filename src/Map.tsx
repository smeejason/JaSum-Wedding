import * as React from 'react';
import './styles.css'

export interface IMapProps {
    longitude?: number;
    latitude?: number;
    enabled?: boolean;
    className?: string;
    zoom: number;    
}

declare function myMap(long:number, lat:number, mapID:string, zoom:number) : void;

export default class Map extends React.Component<IMapProps> {
    public componentDidMount() {
        if (this.shouldShow())
        {
            myMap(this.props.longitude as number,this.props.latitude as number, "modalMap", this.props.zoom);
        }
    }

    public render() {
        return (
            <React.Fragment>
                {this.shouldShow() &&
                    <div className={this.props.className} id="modalMap">&nbsp;</div>
                }
            </React.Fragment>
        );
    }

    protected shouldShow(): boolean
    {
        return (this.props.enabled != null && this.props.enabled && this.props.latitude != null && this.props.longitude != null);
    }
}
